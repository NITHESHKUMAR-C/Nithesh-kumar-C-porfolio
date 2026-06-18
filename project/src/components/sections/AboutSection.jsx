import React from 'react'
import { useInView } from '../../hooks/useInView'
import './AboutSection.css'

const CARDS = [
  {
    icon: '🎯',
    title: 'Career Objective',
    desc: 'Seeking entry-level Software / AI Engineer roles to build efficient, data-driven applications in a product-focused environment.',
  },
  {
    icon: '🤖',
    title: 'AI / ML Focus',
    desc: 'Specializing in machine learning models, prompt engineering, and intelligent systems using Python and modern ML frameworks.',
  },
  {
    icon: '⚙️',
    title: 'Engineering Philosophy',
    desc: 'Clean, modular code with strong OOP principles. Prioritize maintainability, performance, and real-world impact.',
  },
  {
    icon: '🌱',
    title: 'Growth Mindset',
    desc: 'Continuously expanding skills — from DSA to cloud to generative AI — staying current with the evolving tech landscape.',
  },
]

export default function AboutSection({ id }) {
  const [ref, inView] = useInView(0.2)
  return (
    <section className="section about" id={id}>
      <div
        ref={ref}
        className={`container container--sm about__inner fade-up${inView ? ' visible' : ''}`}
      >
        <div className="section-label">02 / about.md</div>

        <div className="about__profile">
          <div className="about__avatar">NK</div>
          <div>
            <h2 className="about__name">Nithesh Kumar C</h2>
            <p className="about__role muted">Software Engineer · AI Engineer · B.Tech IT (2023–2027)</p>
            <div className="about__chips">
              <a href="mailto:nithesh2425@gmail.com" className="chip mono">nithesh2425@gmail.com</a>
              <a href="tel:+918838111580" className="chip mono">+91 8838111580</a>
              <a href="https://linkedin.com/in/nithesh-kumar-c" target="_blank" rel="noopener noreferrer" className="chip mono">LinkedIn</a>
              <span className="chip mono">Krishnagiri, TN</span>
            </div>
          </div>
        </div>

        <div className="about__bio">
          <p>
            Passionate Information Technology undergraduate at{' '}
            <strong>Hindusthan College of Engineering and Technology</strong>{' '}
            (CGPA&nbsp;8.22). Specializing in Full-Stack Development, Machine Learning,
            and AI-powered systems.
          </p>
          <p>
            I build real-world applications — from civic tech platforms to
            predictive ML models. Strong foundations in DSA, OOP, DBMS,
            and Software Engineering principles.
          </p>
        </div>

        <div className="about__grid">
          {CARDS.map((c, i) => (
            <div
              key={c.title}
              className="about__card"
              style={{ animationDelay: inView ? `${i * 0.1}s` : '0s' }}
            >
              <span className="about__card-icon">{c.icon}</span>
              <h4 className="about__card-title">{c.title}</h4>
              <p className="about__card-desc muted">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
