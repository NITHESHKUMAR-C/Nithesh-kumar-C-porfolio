import React from 'react'
import './SectionCounter.css'

const pad = (n) => String(n).padStart(2, '0')

export default function SectionCounter({ current, total }) {
  return (
    <div className="sc mono">
      <span className="sc__cur accent">{pad(current)}</span>
      <span className="sc__sep muted"> / </span>
      <span className="sc__tot muted">{pad(total)}</span>
    </div>
  )
}
