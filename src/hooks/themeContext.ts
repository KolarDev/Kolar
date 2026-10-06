import { createContext, useContext } from 'react'

export type Theme = 'light' | 'dark'
export const THEME_STORAGE_KEY = 'theme'

export const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: 'light',
  toggleTheme: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/** Reads the theme the boot script in index.html already applied, so there's no mismatch on mount. */
export function getInitialTheme(): Theme {
  const attr = document.documentElement.getAttribute('data-theme')
  if (attr === 'light' || attr === 'dark') return attr
  return getSystemTheme()
}
