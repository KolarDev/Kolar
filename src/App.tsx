import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { IntroProvider } from './components/intro/IntroProvider'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { PageTransition } from './components/ui/PageTransition'
import { useScrollToHash } from './hooks/useScrollToHash'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { WorkDetailPage } from './pages/WorkDetailPage'
import { WorkPage } from './pages/WorkPage'

function App() {
  const location = useLocation()
  useScrollToHash()

  return (
    <IntroProvider>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/work/:id" element={<WorkDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </PageTransition>
        </AnimatePresence>
      </main>
      <SiteFooter />
    </IntroProvider>
  )
}

export default App
