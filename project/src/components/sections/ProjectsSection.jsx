import React from 'react'
import { useInView } from '../../hooks/useInView'
import './ProjectsSection.css'

const GH_ICON = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const PROJECTS = [
  {
    icon: '🏙',
    name: 'CivicConnect',
    type: 'Full-Stack · AI-Powered · SIH Project',
    desc: 'AI civic issue reporting system with GPS tagging, image uploads, real-time tracking, and an admin dashboard for resolution management.',
    features: ['AI Classification', 'GPS Tagging', 'Admin Dashboard', 'Real-Time Tracking', 'Complaint Management'],
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Tailwind'],
    github: 'https://github.com/NITHESHKUMAR-C/CivicConcerns',
  },
  {
    icon: '🏏',
    name: 'IPL Winner Prediction',
    type: 'Machine Learning · Predictive Analytics',
    desc: 'ML model predicting IPL match winners using historical data with feature selection and comprehensive model evaluation techniques.',
    features: ['Data Preprocessing', 'Feature Selection', 'Model Evaluation'],
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib'],
    github: 'https://github.com/NITHESHKUMAR-C/IPL-winner-prediction',
  }
  
]

export default function ProjectsSection({ id }) {
  const [ref, inView] = useInView(0.15)
  return (
    <section className="section projects" id={id}>
      <div
        ref={ref}
        className={`container projects__inner fade-up${inView ? ' visible' : ''}`}
      >
        <div className="section-label"></div>
        <h2 className="projects__title">Projects</h2>
        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <div
              key={p.name}
              className="proj-card"
              style={{ animationDelay: inView ? `${i * 0.1}s` : '0s' }}
            >
              <div className="proj-card__top">
                <span className="proj-icon">{p.icon}</span>
                <div>
                  <h3 className="proj-name">{p.name}</h3>
                  <span className="proj-type mono muted">{p.type}</span>
                </div>
              </div>
              <p className="proj-desc muted">{p.desc}</p>
              <ul className="proj-features">
                {p.features.map(f => (
                  <li key={f}><span className="accent">✓</span> {f}</li>
                ))}
              </ul>
              <div className="proj-tags">
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              <div className="proj-card__footer">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-link mono"
                >
                  {GH_ICON} GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
