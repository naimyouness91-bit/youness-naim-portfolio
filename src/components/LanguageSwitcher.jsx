import { useLanguage } from '../context/LanguageContext'

const LANGUAGE_OPTIONS = [
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'en', label: 'EN', name: 'English' },
]

export default function LanguageSwitcher({ className = '' }) {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t.nav.languageSwitcher}
      className={`inline-flex items-center rounded-md border border-[color:var(--border-subtle)] bg-[color:var(--surface)]/80 p-0.5 backdrop-blur-sm ${className}`}
    >
      {LANGUAGE_OPTIONS.map((option) => {
        const isActive = language === option.code

        return (
          <button
            key={option.code}
            type="button"
            lang={option.code}
            aria-label={option.name}
            aria-pressed={isActive}
            onClick={() => setLanguage(option.code)}
            className={`rounded px-2.5 py-1 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-primary)] ${
              isActive
                ? 'bg-[color:var(--accent-primary)] text-[color:var(--accent-on-primary)]'
                : 'text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)] hover:bg-[color:var(--surface-hover)]'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
