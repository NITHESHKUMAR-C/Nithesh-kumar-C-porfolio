import React, { useState } from 'react'
import { useInView } from '../../hooks/useInView'
import './ContactSection.css'

const QUICK = [
  { icon: '📧', label: 'nithesh2425@gmail.com', href: 'mailto:nithesh2425@gmail.com' },
  { icon: '💼', label: 'LinkedIn',              href: 'https://linkedin.com/in/nithesh-kumar-c' },
  { icon: '🐙', label: 'GitHub',                href: 'https://github.com/NITHESHKUMAR-C' },
  { icon: '📱', label: '+91 8838111580',        href: 'tel:+918838111580' },
]

export default function ContactSection({ id }) {
  const [ref, inView] = useInView(0.2)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    if (!name || !email || !subject || !message) return
    const href = `mailto:nithesh2425@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`
    window.location.href = href
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="section contact" id={id}>
      <div
        ref={ref}
        className={`container container--xs contact__inner fade-up${inView ? ' visible' : ''}`}
      >
        <div className="section-label">08 / contact.form</div>
        <h2 className="contact__title">Get in Touch</h2>
        <p className="contact__sub muted">Open to internship and entry-level opportunities</p>

        <div className="quick-links">
          {QUICK.map(q => (
            <a
              key={q.label}
              href={q.href}
              target={q.href.startsWith('http') ? '_blank' : undefined}
              rel={q.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="quick-link mono"
            >
              <span>{q.icon}</span>
              <span>{q.label}</span>
            </a>
          ))}
        </div>

        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="cf-name" className="form-label mono">Name</label>
              <input
                id="cf-name" name="name" type="text"
                className="form-input" placeholder="Your name"
                value={form.name} onChange={set} required
              />
            </div>
            <div className="form-field">
              <label htmlFor="cf-email" className="form-label mono">Email</label>
              <input
                id="cf-email" name="email" type="email"
                className="form-input" placeholder="your@email.com"
                value={form.email} onChange={set} required
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="cf-subject" className="form-label mono">Subject</label>
            <input
              id="cf-subject" name="subject" type="text"
              className="form-input" placeholder="Internship opportunity / Collaboration"
              value={form.subject} onChange={set} required
            />
          </div>
          <div className="form-field">
            <label htmlFor="cf-message" className="form-label mono">Message</label>
            <textarea
              id="cf-message" name="message"
              className="form-input form-textarea" placeholder="Your message..."
              rows={4} value={form.message} onChange={set} required
            />
          </div>
          <button type="submit" className="btn btn--primary contact-submit">
            {sent ? '✓ Message sent!' : 'Send Message →'}
          </button>
        </form>

        <footer className="contact-footer mono muted">
          Built with ♥ by Nithesh Kumar C · 2025
        </footer>
      </div>
    </section>
  )
}
