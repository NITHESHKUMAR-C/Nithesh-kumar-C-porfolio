import React from 'react'
import { useInView } from '../../hooks/useInView'
import './CertificationsSection.css'

const CERTS = [
  { icon: '☁️', org: 'NPTEL',                name: 'Cloud Computing',                    badge: 'Elite',     color: 'gold' },
  { icon: '🔐', org: 'NPTEL',                name: 'Cyber Security & Privacy',           badge: 'Elite',     color: 'gold' },
  { icon: '🧠', org: 'Udacity × AWS',        name: 'Introducing Generative AI with AWS', badge: 'Completed', color: 'green' },
  { icon: '🤖', org: 'Infosys Springboard',  name: 'Introduction to AI',                 badge: 'Completed', color: 'green' },
  { icon: '🌐', org: 'Infosys Springboard',  name: 'AI for All',                         badge: 'Completed', color: 'green' },
  { icon: '✍️', org: 'Infosys Springboard',  name: 'Prompt Engineering',                 badge: 'Completed', color: 'green' },
]

export default function CertificationsSection({ id }) {
  const [ref, inView] = useInView(0.2)
  return (
    <section className="section certs" id={id}>
      <div
        ref={ref}
        className={`container container--sm certs__inner fade-up${inView ? ' visible' : ''}`}
      >
        <div className="section-label">06 / certifications.key</div>
        <h2 className="certs__title">Certifications</h2>
        <div className="certs__grid">
          {CERTS.map((c, i) => (
            <div
              key={`${c.org}-${c.name}`}
              className="cert-card"
              style={{ animationDelay: inView ? `${i * 0.07}s` : '0s' }}
            >
              <span className="cert-icon">{c.icon}</span>
              <div className="cert-body">
                <span className="cert-org mono muted">{c.org}</span>
                <h4 className="cert-name">{c.name}</h4>
                <span className={`cert-badge mono cert-badge--${c.color}`}>{c.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
