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
            href="/assets/resume/RenderCV_EngineeringResumes_Theme__1_.pdf"
            download="Nithesh_Kumar_C_Resume.pdf"
            className="btn btn--primary"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Resume
          </a>
          <button className="btn btn--outline" onClick={() => onNavigate(4)}>
            View Projects
          </button>
          <button className="btn btn--ghost" onClick={() => onNavigate(7)}>
            Contact Me
          </button>
          <a
            href="https://github.com/NITHESHKUMAR-C"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
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
            <span className="terminal__file mono">profile.ts</span>
          </div>
          <pre className="terminal__body mono">{`const profile = {
  name: "Nithesh Kumar C",
  role: "AI Engineer",
  stack: [
    "React", "Python", "ML"
  ],
  cgpa: 8.22,
  location: "Tamil Nadu",
  open: true
}`}</pre>
        </div>
        <div className="hero__avatar">NK</div>
      </div>

      {/* ── Scroll hint ── */}
      <button className="scroll-hint mono" onClick={() => onNavigate(1)} aria-label="Next section">
        scroll to explore&nbsp;<span className="bounce">↓</span>
      </button>
    </section>
  )
}
