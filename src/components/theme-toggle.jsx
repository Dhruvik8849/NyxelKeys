'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      const initial = stored || (prefersDark ? 'dark' : 'light')
      setTheme(initial)
      document.documentElement.classList.toggle('dark', initial === 'dark')
    } catch (e) {
      // ignore (server-side or privacy settings)
    }
  }, [])

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try { localStorage.setItem('theme', next) } catch (e) {}
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="btn-primary">
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}
