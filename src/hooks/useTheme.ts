import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'flicklabs-theme'

/** Dark is the default. Light only applies when the visitor picks it. */
const DEFAULT_THEME: Theme = 'dark'

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'dark' || stored === 'light' ? stored : null
  } catch {
    // Storage unavailable (private mode, blocked cookies): treat as no preference.
    return null
  }
}

function readInitialTheme(): Theme {
  return readStoredTheme() ?? DEFAULT_THEME
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitialTheme)

  useEffect(() => {
    const isDark = theme === 'dark'
    document.documentElement.classList.toggle('dark', isDark)
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', isDark ? '#11110f' : '#f5f2ec')
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(current => {
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // The choice still applies for this session, it just won't survive a reload.
      }
      return next
    })
  }, [])

  return { theme, toggleTheme }
}
