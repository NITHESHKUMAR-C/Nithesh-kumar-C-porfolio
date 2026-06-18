import React, { useState } from 'react'
import './SideNav.css'

export default function SideNav({ sections, activeSection, onNavigate }) {
  const [hovered, setHovered] = useState(null)
  return (
    <nav className="sidenav" aria-label="Page navigation">
      {sections.map((s, i) => (
        <button
          key={s.id}
          className={`sidenav__dot${activeSection === i ? ' active' : ''}`}
          onClick={() => onNavigate(i)}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          aria-label={`Go to ${s.label}`}
        >
          <span className="sidenav__pip" />
          {hovered === i && <span className="sidenav__label mono">{s.label}</span>}
        </button>
      ))}
    </nav>
  )
}
