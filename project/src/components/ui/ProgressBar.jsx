import React from 'react'
import './ProgressBar.css'

export default function ProgressBar({ progress }) {
  return (
    <div className="pb-track">
      <div className="pb-fill" style={{ width: `${progress}%` }} />
    </div>
  )
}
