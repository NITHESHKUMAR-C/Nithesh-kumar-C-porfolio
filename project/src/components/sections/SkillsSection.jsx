import React from 'react'
import { useInView } from '../../hooks/useInView'
import './SkillsSection.css'

const GROUPS = [
  {
    icon: '🖥',
    title: 'Languages',
    skills: ['Java', 'Python', 'SQL', 'JavaScript', 'TypeScript'],
  },
  {
    icon: '🎨',
    title: 'Frontend',
    skills: ['React', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    icon: '🗄',
    title: 'Database',
    skills: ['PostgreSQL', 'Supabase', 'SQL'],
  },
  {
    icon: '🤖',
    title: 'AI & ML',
    skills: ['Machine Learning', 'Deep Learning', 'Prompt Engineering', 'Scikit-Learn', 'Pandas', 'NumPy'],
  },
  {
    icon: '🔧',
    title: 'Tools & Concepts',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'DSA', 'OOP', 'DBMS'],
  },
]

export default function SkillsSection({ id }) {
  const [ref, inView] = useInView(0.2)
  return (
    <section className="section skills" id={id}>
      <div
        ref={ref}
        className={`container skills__inner fade-up${inView ? ' visible' : ''}`}
      >
        <div className="section-label">04 / skills.json</div>
        <h2 className="skills__title">Technical Skills</h2>
        <div className="skills__grid">
          {GROUPS.map((g, gi) => (
            <div
              key={g.title}
              className="skill-card"
              style={{ animationDelay: inView ? `${gi * 0.07}s` : '0s' }}
            >
              <div className="skill-card__hd">
                <span>{g.icon}</span>
                <span className="skill-card__name mono">{g.title}</span>
              </div>
              <div className="skill-card__tags">
                {g.skills.map((s, si) => (
                  <span
                    className="tag"
                    key={s}
                    style={{ animationDelay: inView ? `${gi * 0.07 + si * 0.04}s` : '0s' }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
