import React from 'react'
import { useInView } from '../../hooks/useInView'
import './ExperienceSection.css'

const TIMELINE = [
 
  {
    year: '2025',
    company: 'Dev Technology Solutions',
    role: 'Java Developer Intern',
    bullets: [
      'Refactored Java modules using OOP principles to enhance modularity and reduce defects',
      'Implemented Java Collections Framework for efficient data handling',
      'Structured exception handling improving runtime stability and execution reliability',
      'Improved overall code maintainability across the codebase',
    ],
  },
  {
    year: '2024',
    company: 'InternPe',
    role: 'Python Development Intern',
    bullets: [
      'Built Python mini-games with OOP architecture — modular functions, classes, and conditionals',
      'Implemented score tracking, input validation, and level progression',
      'Applied performance optimization and edge-case handling for reliable execution',
    ],
  },
]

const WORKSHOPS = [
  {
    icon: '⚛️',
    title: 'React.js Workshop',
    badge: 'Frontend',
    org: 'Kongu Engineering College',
    desc: 'Hands-on experience building dynamic, reusable, component-based UIs with React.',
  },
  {
    icon: '🚀',
    title: 'Niral Thiruvizha 2.0 Ignite Bootcamp',
    badge: 'Venture Idea',
    org: 'Venture Development',
    desc: 'Participated in intensive design thinking and venture idea development sessions focused on crafting viable tech solutions.',
  }
]

export default function ExperienceSection({ id }) {
  const [ref, inView] = useInView(0.2)
  return (
    <section className="section exp" id={id}>
      <div
        ref={ref}
        className={`container container--sm exp__inner fade-up${inView ? ' visible' : ''}`}
      >
        
        <h2 className="exp__title">Experience</h2>

        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <div
              key={item.company}
              className="tl-item"
              style={{ animationDelay: inView ? `${i * 0.15}s` : '0s' }}
            >
              <div className="tl-year mono accent">{item.year}</div>
              <div className="tl-spine">
                <div className="tl-dot" />
                {i < TIMELINE.length - 1 && <div className="tl-line" />}
              </div>
              <div className="tl-body">
                <div className="tl-company">{item.company}</div>
                <div className="tl-role mono accent">{item.role}</div>
                <ul className="tl-bullets">
                  {item.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="exp__divider" />

        {/* WORKSHOPS HEADING ADDED HERE */}
        <h2 className="exp__title" style={{ marginTop: '8 0px' }}>Workshops & Bootcamps</h2>

        <div className="workshops">
          {WORKSHOPS.map((w, i) => (
            <div
              key={w.title}
              className="workshop"
              style={{ animationDelay: inView ? `${0.3 + i * 0.1}s` : '0s' }}
            >
              <span className="workshop__icon">{w.icon}</span>
              <div>
                <div className="workshop__title">
                  {w.title}
                  {w.badge && <span className="workshop__badge mono">{w.badge}</span>}
                </div>
                <div className="workshop__org mono muted">{w.org}</div>
                <p className="workshop__desc muted">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CENTERED ICON ADDED AT THE BOTTOM */}
        <div className="exp__footer-icon">
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="var(--accent)" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>

      </div>
    </section>
  )
}