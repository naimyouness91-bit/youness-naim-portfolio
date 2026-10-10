import { useEffect, useMemo, useState } from 'react'
import { translations } from '../data/translations'
import { LanguageContext } from './LanguageContext'

const STORAGE_KEY = 'portfolio-language'
const SUPPORTED_LANGUAGES = ['fr', 'en']
const DEFAULT_LANGUAGE = 'fr'

function readStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED_LANGUAGES.includes(stored)) {
      return stored
    }
  } catch {
    // localStorage unavailable (private mode, blocked context, ...)
  }

  return DEFAULT_LANGUAGE
}

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(readStoredLanguage)

  useEffect(() => {
    document.documentElement.lang = language

    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // localStorage unavailable (private mode, blocked context, ...)
    }
  }, [language])

  const value = useMemo(() => {
    const t = translations[language]

    const localize = (entry) => {
      if (typeof entry === 'string') {
        return entry
      }

      return entry[language] ?? entry[DEFAULT_LANGUAGE]
    }

    return { language, setLanguage, t, localize }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
