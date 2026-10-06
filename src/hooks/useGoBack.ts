import { useLocation, useNavigate } from 'react-router-dom'

/**
 * Goes back in history when the visitor actually navigated here from within the app,
 * otherwise falls back to a fixed destination (e.g. a bookmarked or directly-loaded URL,
 * where browser "back" would leave the site entirely).
 */
export function useGoBack(fallback = '/') {
  const navigate = useNavigate()
  const location = useLocation()
  const cameFromWithinApp = location.key !== 'default'

  return () => {
    if (cameFromWithinApp) navigate(-1)
    else navigate(fallback)
  }
}
