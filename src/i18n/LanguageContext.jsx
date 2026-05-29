import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react'
import { translations } from './translations.js'

const STORAGE_KEY = 'occasio-lang'
const SUPPORTED = ['en', 'es']

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && SUPPORTED.includes(stored)) return stored
    const browser = (navigator.language || 'en').slice(0, 2).toLowerCase()
    return SUPPORTED.includes(browser) ? browser : 'en'
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, lang)
      document.documentElement.setAttribute('lang', lang)
    }
  }, [lang])

  const setLang = useCallback((next) => {
    if (SUPPORTED.includes(next)) setLangState(next)
  }, [])

  const t = useCallback(
    (key) => {
      const dict = translations[lang] || translations.en
      return dict[key] ?? translations.en[key] ?? key
    },
    [lang]
  )

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}

export const SUPPORTED_LANGS = SUPPORTED
