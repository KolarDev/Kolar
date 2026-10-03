import { useState, type ReactNode } from 'react'
import { IntroContext, shouldSkipIntro, STORAGE_KEY } from '../../hooks/introContext'
import { IntroOverlay } from './IntroOverlay'

/** Plays the intro once per browser session (and never under reduced motion). */
export function IntroProvider({ children }: { children: ReactNode }) {
  const [introDone, setIntroDone] = useState(shouldSkipIntro)

  function finishIntro() {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // sessionStorage may be unavailable (private mode); proceed anyway
    }
    setIntroDone(true)
  }

  return (
    <IntroContext.Provider value={introDone}>
      {!introDone && <IntroOverlay onFinished={finishIntro} />}
      {children}
    </IntroContext.Provider>
  )
}
