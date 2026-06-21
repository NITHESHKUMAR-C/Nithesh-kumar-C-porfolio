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
        <div className="section-label"></div>
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

        {/* ── LeetCode Button (Official Colors) ── */}
<div 
  style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    marginTop: '100px', 
    paddingBottom: '20px',
    animationDelay: inView ? '0.6s' : '0s' 
  }} 
  className={`fade-up${inView ? ' visible' : ''}`}
>
  <a
    href="https://leetcode.com/u/CwRYWsttHn/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn--outline"
    style={{ 
      borderColor: '#FFA116', /* LeetCode Orange border */
      color: 'var(--text)' 
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = '#FFA116';
      e.currentTarget.style.color = '#000000';
      // Changes the SVG to black when hovering over the orange button
      e.currentTarget.querySelector('svg').style.fill = '#000000'; 
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = 'var(--text)';
      // Changes the SVG back to official orange when not hovering
      e.currentTarget.querySelector('svg').style.fill = '#FFA116'; 
    }}
  >
    <svg 
      viewBox="0 0 24 24" 
      width="18" 
      height="18" 
      fill="#FFA116" /* Official LeetCode Orange */
      style={{ transition: 'fill 0.2s' }}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 2.517 5.252 5.252 0 0 0 2.105 3.442 5.274 5.274 0 0 0 3.443 1.207 5.32 5.32 0 0 0 2.518-.127 5.275 5.275 0 0 0 2.105-1.207l1.736-1.767 1.18 1.19a2.253 2.253 0 0 0 3.161 0 2.222 2.222 0 0 0 0-3.15l-3.183-3.192-4.118-4.14 4.229-4.24a.846.846 0 0 1 1.18 0l3.24 3.25a2.253 2.253 0 0 0 3.162 0 2.223 2.223 0 0 0 0-3.151l-3.22-3.236a2.25 2.25 0 0 0-3.182 0l-1.24 1.244-1.636-1.642L14.432.44A1.36 1.36 0 0 0 13.483 0zm-2.817 15.118a.625.625 0 0 1 .183.441.61.61 0 0 1-.183.435.636.636 0 0 1-.444.184.636.636 0 0 1-.444-.184l-1.609-1.618a.614.614 0 0 1-.182-.436.614.614 0 0 1 .182-.435.626.626 0 0 1 .444-.184.626.626 0 0 1 .444.184z"/>
    </svg>
    View LeetCode Profile
  </a>
</div>

      </div>
    </section>
  )
}