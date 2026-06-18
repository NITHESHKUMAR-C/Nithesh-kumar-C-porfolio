import React, { useState, useEffect, useCallback, useRef } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import TopBar from './components/ui/TopBar'
import SideNav from './components/ui/SideNav'
import ProgressBar from './components/ui/ProgressBar'
import SectionCounter from './components/ui/SectionCounter'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ExperienceSection from './components/sections/ExperienceSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import CertificationsSection from './components/sections/CertificationsSection'
import ProfilesSection from './components/sections/ProfilesSection'
import ContactSection from './components/sections/ContactSection'

const SECTIONS = [
  { id: 'hero',           label: 'hero' },
  { id: 'about',          label: 'about' },
  { id: 'experience',     label: 'experience' },
  { id: 'skills',         label: 'skills' },
  { id: 'projects',       label: 'projects' },
  { id: 'certifications', label: 'certifications' },
  { id: 'profiles',       label: 'profiles' },
  { id: 'contact',        label: 'contact' },
]

export default function App() {
  const [activeSection, setActiveSection] = useState(0)
  const [progress, setProgress] = useState(0)

  const handleScroll = useCallback(() => {
    const el = document.documentElement
    const scrollTop = el.scrollTop
    const total = el.scrollHeight - el.clientHeight
    setProgress(total > 0 ? (scrollTop / total) * 100 : 0)
    const idx = Math.round(scrollTop / window.innerHeight)
    setActiveSection(Math.min(idx, SECTIONS.length - 1))
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToSection = useCallback((idx) => {
    window.scrollTo({ top: idx * window.innerHeight, behavior: 'smooth' })
  }, [])

  return (
    <ThemeProvider>
      <TopBar />
      <SideNav sections={SECTIONS} activeSection={activeSection} onNavigate={scrollToSection} />
      <ProgressBar progress={progress} />
      <SectionCounter current={activeSection + 1} total={SECTIONS.length} />
      <main>
        <HeroSection id="hero" onNavigate={scrollToSection} />
        <AboutSection id="about" />
        <ExperienceSection id="experience" />
        <SkillsSection id="skills" />
        <ProjectsSection id="projects" onNavigate={scrollToSection} />
        <CertificationsSection id="certifications" />
        <ProfilesSection id="profiles" />
        <ContactSection id="contact" />
      </main>
    </ThemeProvider>
  )
}
