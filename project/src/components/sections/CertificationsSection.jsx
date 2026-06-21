import React from 'react'
import { useInView } from '../../hooks/useInView'
import './CertificationsSection.css'

const CERTS = [
  // Replace 'YOUR_LINK_HERE' with your actual certificate URLs!
  { icon: '☁️', org: 'NPTEL',                name: 'Cloud Computing',                    badge: 'Elite',     color: 'gold',  link: 'https://drive.google.com/file/d/1iRLtovaOVlOhyrwT9xA8psWlqD3uP4Jv/view?usp=drivesdk' },
  { icon: '🔐', org: 'NPTEL',                name: 'Cyber Security & Privacy',           badge: 'Elite',     color: 'gold',  link: 'https://drive.google.com/file/d/1x-6Uw7pd817B2oCX9ic7bsknxuYiMooc/view?usp=drivesdk' },
  { icon: '🧠', org: 'Udacity × AWS',        name: 'Introducing Generative AI with AWS', badge: 'Completed', color: 'green', link: 'https://drive.google.com/file/d/16-_KiQ3VXacTHz7OsTzbK6_nbrgKDQ5s/view?usp=drivesdk' },
  { icon: '🤖', org: 'Infosys Springboard',  name: 'Introduction to Artificial Intelligence',                 badge: 'Completed', color: 'green', link: 'https://drive.google.com/file/d/1IpWJ6VuCExuNzDEYY1rZyFlOsP2ZsavP/view?usp=drivesdk' },
  { icon: '🌐', org: 'Infosys Springboard',  name: 'Artificial Intelligence for All',                         badge: 'Completed', color: 'green', link: 'https://drive.google.com/file/d/1Tfp7wubYxRFdMy43-hKmNywQ9Eg-m3Ga/view?usp=drivesdk' },
  { icon: '✍️', org: 'Infosys Springboard',  name: 'Prompt Engineering',                 badge: 'Completed', color: 'green', link: 'https://drive.google.com/file/d/1nw5r6n_-lVILtVx_ig6crhHSSGmqzkTE/view?usp=drivesdk' },
]

export default function CertificationsSection({ id }) {
  const [ref, inView] = useInView(0.2)
  return (
    <section className="section certs" id={id}>
      <div
        ref={ref}
        className={`container container--sm certs__inner fade-up${inView ? ' visible' : ''}`}
      >
        <div className="section-label"></div>
        <h2 className="certs__title">Certifications</h2>
        <div className="certs__grid">
          {CERTS.map((c, i) => (
            <a
              key={`${c.org}-${c.name}`}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              style={{ 
                animationDelay: inView ? `${i * 0.07}s` : '0s',
                textDecoration: 'none', /* Keeps your text looking normal */
                color: 'inherit',
                display: 'flex' /* Ensures the layout stays the same */
              }}
            >
              <span className="cert-icon">{c.icon}</span>
              <div className="cert-body">
                <span className="cert-org mono muted">{c.org}</span>
                <h4 className="cert-name">{c.name}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                  <span className={`cert-badge mono cert-badge--${c.color}`}>{c.badge}</span>
                  <span className="muted" style={{ fontSize: '14px' }}>↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}