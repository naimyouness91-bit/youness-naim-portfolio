import { Moon, Sun } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle({ className = '' }) {
  const { t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const isDark = theme === 'dark'
  const label = isDark ? t.nav.switchToLight : t.nav.switchToDark

  return (
    <div
      className={`inline-flex items-center rounded-md border border-[color:var(--border-subtle)] bg-[color:var(--surface)]/80 p-0.5 backdrop-blur-sm ${className}`}
    >
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={label}
        title={label}
        className="rounded px-2 py-1 text-xs font-semibold text-[color:var(--text-muted)] transition-colors hover:bg-[color:var(--surface-hover)] hover:text-[color:var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-primary)]"
      >
        {isDark ? (
          <Sun size={16} className="h-[1.333em] w-[1.333em]" aria-hidden="true" />
        ) : (
          <Moon size={16} className="h-[1.333em] w-[1.333em]" aria-hidden="true" />
        )}
      </button>
    </div>
  )
}
