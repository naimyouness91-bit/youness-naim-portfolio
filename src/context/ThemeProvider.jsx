import { useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContext'

const STORAGE_KEY = 'portfolio-theme'
const SUPPORTED_THEMES = ['dark', 'light']
const DEFAULT_THEME = 'dark'
const THEME_COLOR = {
  dark: '#0f1117',
  light: '#f5f6fa',
}

function applyThemeToDocument(theme) {
  document.documentElement.dataset.theme = theme

  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute('content', THEME_COLOR[theme])
  }
}

function readStoredTheme() {
  const applied = document.documentElement.dataset.theme
  if (SUPPORTED_THEMES.includes(applied)) {
    return applied
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED_THEMES.includes(stored)) {
      return stored
    }
  } catch {
    // localStorage unavailable (private mode, blocked context, ...)
  }

  return DEFAULT_THEME
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readStoredTheme)

  useEffect(() => {
    applyThemeToDocument(theme)

    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // localStorage unavailable (private mode, blocked context, ...)
    }
  }, [theme])

  const value = useMemo(() => {
    const toggleTheme = () => {
      setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
    }

    return { theme, setTheme, toggleTheme }
  }, [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
