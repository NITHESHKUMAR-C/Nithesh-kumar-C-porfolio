import React, { useEffect, useRef, useState } from 'react'
import './HeroSection.css'

const ROLES = ['Software Engineer', 'AI / ML Engineer', 'Full-Stack Developer', 'Problem Solver']

function useTyping(words, speed = 75, pause = 1800) {
  const [display, setDisplay] = useState('')
  const state = useRef({ wordIdx: 0, charIdx: 0, deleting: false })

  useEffect(() => {
    const tick = () => {
      const { wordIdx, charIdx, deleting } = state.current
      const word = words[wordIdx]
      if (!deleting) {
        const next = word.slice(0, charIdx + 1)
        setDisplay(next)
        if (charIdx + 1 === word.length) {
          state.current.deleting = true
          return pause
        }
        state.current.charIdx++
      } else {
        const next = word.slice(0, charIdx - 1)
        setDisplay(next)
        if (charIdx - 1 === 0) {
          state.current.deleting = false
          state.current.wordIdx = (wordIdx + 1) % words.length
          state.current.charIdx = 0
        } else {
          state.current.charIdx--
        }
      }
      return deleting ? speed / 2 : speed
    }
    let timer
    const run = () => { const delay = tick(); timer = setTimeout(run, delay) }
    timer = setTimeout(run, speed)
    return () => clearTimeout(timer)
  }, [words, speed, pause])

  return display
}

function PixelCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const W = canvas.offsetWidth, H = canvas.offsetHeight
    canvas.width = W; canvas.height = H
    const ctx = canvas.getContext('2d')
    const STEP = 22
    const dots = []
    for (let y = STEP / 2; y < H; y += STEP)
      for (let x = STEP / 2; x < W; x += STEP)
        dots.push({ x, y, phase: Math.random() * Math.PI * 2, spd: 0.6 + Math.random() * 1.2 })
    let raf
    const draw = (t) => {
      ctx.clearRect(0, 0, W, H)
      const isLight = document.documentElement.classList.contains('light')
      const rgb = isLight ? '37,99,235' : '0,255,136'
      dots.forEach(d => {
        const a = 0.06 + 0.28 * (0.5 + 0.5 * Math.sin(t * 0.001 * d.spd + d.phase))
        ctx.beginPath()
        ctx.arc(d.x, d.y, 1.6, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb},${a})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(raf)
  }, [])
  return <canvas ref={canvasRef} className="pixel-canvas" />
}

export default function HeroSection({ id, onNavigate }) {
  const typed = useTyping(ROLES)

  return (
    <section className="section hero" id={id}>
      {/* ── Left ── */}
      <div className="hero__left">
        <div className="hero__badge mono">
          <span className="badge-dot" />
          Open to Internships &amp; Entry-Level Roles
        </div>

        <h1 className="hero__name">
          Nithesh<br />Kumar C
        </h1>

        <p className="hero__typing mono">
          <span className="accent">&gt;&nbsp;</span>
          {typed}
          <span className="cursor" />
        </p>

        <p className="hero__desc muted">
          Building AI-powered applications, scalable web systems,
          and intelligent software solutions.
        </p>

        <div className="hero__cta">
          <a
            href="https://drive.google.com/file/d/14xaHIN6U3J-Wn27v5AusrQwgCIBTHrUu/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            View Resume
          </a>
          
          <a href="#projects" className="btn btn--outline">
            View Projects
          </a>

          <a href="#experience" className="btn btn--outline">
            Experience
          </a>

          <a href="#skills" className="btn btn--outline">
            Technical Skills
          </a>

          <a href="#certifications" className="btn btn--outline">
            Certifications
          </a>
          
          <a href="#contact" className="btn btn--ghost">
            Contact Me
          </a>
        </div>
        <div className="hero__stats">
          {[
            { val: '8.22', label: 'CGPA' },
            { val: '3+',   label: 'Projects' },
            { val: '6+',   label: 'Certifications' },
            { val: '15+',  label: 'Technologies' },
          ].map((s, i, arr) => (
            <React.Fragment key={s.label}>
              <div className="stat">
                <span className="stat__val accent mono">{s.val}</span>
                <span className="stat__label muted">{s.label}</span>
              </div>
              {i < arr.length - 1 && <div className="stat__div" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── Right ── */}
      <div className="hero__right">
        <PixelCanvas />
        <div className="terminal">
          <div className="terminal__bar">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
            <span className="terminal__file mono"></span>
          </div>
          <pre className="terminal__body mono">{`const profile = {
  name: "Nithesh Kumar C",
  role: "Software Engineer",
  stack: [
    "React", "Python", "ML"
  ],
  cgpa: 8.22,
  location: "Tamil Nadu",
  open: true
}`}</pre>
        </div>
        
        {/* 📸 UPDATED DIRECTLY TO NITHESH.JPG */}
        <img src="/nithesh.png" alt="Nithesh Kumar C" className="hero__avatar profile-img" />
        
      </div>

      {/* ── Scroll hint ── */}
      <a href="#about" className="scroll-hint mono" aria-label="Next section">
        scroll to explore&nbsp;<span className="bounce">↓</span>
      </a>
  
    </section>
  )
}