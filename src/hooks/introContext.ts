import { createContext, useContext } from 'react'

export const STORAGE_KEY = 'intro-shown'
export const IntroContext = createContext(true)

export function shouldSkipIntro() {
  if (typeof window === 'undefined') return true
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const alreadyShown = window.sessionStorage.getItem(STORAGE_KEY) === '1'
  return reducedMotion || alreadyShown
}

/** True once the intro has finished (or was skipped) — gates the hero's own entrance. */
export function useIntroDone() {
  return useContext(IntroContext)
}
