import React, { useState, useRef } from 'react'
import { useInView } from '../../hooks/useInView'
import HCaptcha from '@hcaptcha/react-hcaptcha'
import './ContactSection.css'

const QUICK = [
  { icon: '📧', label: 'nithesh2425@gmail.com', href: 'mailto:nithesh2425@gmail.com' },
  { icon: '💼', label: 'LinkedIn',              href: 'https://linkedin.com/in/nithesh-kumar-c' },
  { icon: '🐙', label: 'GitHub',                href: 'https://github.com/NITHESHKUMAR-C' },
  { icon: '💬', label: 'WhatsApp',              href: 'https://wa.me/918838111580?text=Hi%20Nithesh!%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect.' },
  { icon: '📱', label: '+91 8838111580',        href: 'tel:+918838111580' },
]

export default function ContactSection({ id }) {
  const [ref, inView] = useInView(0.2)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  
  // ── New State to hold the CAPTCHA token ──
  const [captchaToken, setCaptchaToken] = useState(null)
  const captchaRef = useRef(null)

  const set = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    
    // Make sure they filled out the form AND clicked the CAPTCHA
    if (!name || !email || !subject || !message) return
    if (!captchaToken) {
      alert("Please complete the CAPTCHA so we know you are human!")
      return
    }

    setLoading(true)

    const formData = new FormData()
    
    // Paste your Web3Forms Access Key right here!
    formData.append("access_key", "b53eae4c-3f18-4970-ab6c-b7b77fae0ce3") 
    
    formData.append("name", name)
    formData.append("email", email)
    formData.append("subject", subject)
    formData.append("message", message)
    
    // Append the CAPTCHA token to the form submission
    formData.append("h-captcha-response", captchaToken)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setSent(true)
        setForm({ name: '', email: '', subject: '', message: '' })
        setCaptchaToken(null) // Reset CAPTCHA state
        captchaRef.current.resetCaptcha() // Visually reset the CAPTCHA box
        setTimeout(() => setSent(false), 4000)
      } else {
        console.error("Error", data)
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please check your connection.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section contact" id={id}>
      <div
        ref={ref}
        className={`container container--xs contact__inner fade-up${inView ? ' visible' : ''}`}
      >
        <div className="section-label"></div>
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

          {/* ── hCaptcha Checkbox Area ── */}
          <div className="form-field" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <HCaptcha
              ref={captchaRef}
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2" // Web3Forms universal sitekey
              onVerify={(token) => setCaptchaToken(token)}
              theme="dark" // Change to "light" if your portfolio has a light theme by default
            />
          </div>

          <button type="submit" className="btn btn--primary contact-submit" disabled={loading}>
            {loading ? 'Sending...' : sent ? '✓ Message sent!' : 'Send Message →'}
          </button>
        </form>

        <footer className="contact-footer mono muted">
          Designed and engineered by Nithesh Kumar C using React, Vite, and Custom CSS.
        </footer>
      </div>
    </section>
  )
}