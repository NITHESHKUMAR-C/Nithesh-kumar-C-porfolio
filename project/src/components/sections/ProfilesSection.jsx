import React from 'react'
import { useInView } from '../../hooks/useInView'
import './ProfilesSection.css'

const GhIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)
const LiIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const PROFILES = [
  {
    Icon: GhIcon,
    platform: 'GitHub',
    handle: 'NITHESHKUMAR-C',
    sub: 'Source code & projects',
    url: 'https://github.com/NITHESHKUMAR-C',
    color: '#e2e8f0',
  },
  {
    Icon: LiIcon,
    platform: 'LinkedIn',
    handle: 'nithesh-kumar-c',
    sub: 'Professional network',
    url: 'https://linkedin.com/in/nithesh-kumar-c',
    color: '#0a66c2',
  },
  {
    icon: '🧩',
    platform: 'LeetCode',
    handle: 'DSA Practice',
    sub: 'Data Structures & Algorithms',
    url: 'https://leetcode.com',
    color: '#ffa116',
  },
  {
    icon: '📗',
    platform: 'GeeksforGeeks',
    handle: 'Algorithms & DSA',
    sub: 'CS fundamentals & practice',
    url: 'https://www.geeksforgeeks.org',
    color: '#2f8d46',
  },
  {
    icon: '⭐',
    platform: 'HackerRank',
    handle: 'Problem Solving',
    sub: 'Competitive programming',
    url: 'https://www.hackerrank.com',
    color: '#00ea64',
  },
]

export default function ProfilesSection({ id }) {
  const [ref, inView] = useInView(0.2)
  return (
    <section className="section profiles" id={id}>
      <div
        ref={ref}
        className={`container container--sm profiles__inner fade-up${inView ? ' visible' : ''}`}
      >
        <div className="section-label">07 / profiles.url</div>
        <h2 className="profiles__title">Developer Profiles</h2>
        <p className="profiles__sub muted">Find me across the developer ecosystem</p>

        <div className="profiles__grid">
          {PROFILES.map((p, i) => (
            <a
              key={p.platform}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card"
              style={{ animationDelay: inView ? `${i * 0.08}s` : '0s' }}
            >
              <div className="profile-card__icon" style={{ color: p.color }}>
                {p.Icon ? <p.Icon /> : <span style={{ fontSize: 20 }}>{p.icon}</span>}
              </div>
              <div className="profile-card__body">
                <div className="profile-platform">{p.platform}</div>
                <div className="profile-handle mono muted">{p.handle}</div>
                <div className="profile-sub muted">{p.sub}</div>
              </div>
              <span className="profile-arrow accent">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
