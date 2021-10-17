import React, { useEffect } from 'react'

import useMediaQuery from '../MediaQuery/useMediaQuery'
import { useLocalStorage } from '../Storage/useStorage'

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage('useDarkMode')
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const enabled = darkMode ?? prefersDarkMode

  useEffect(() => {
    document.body.classList.toggle('dark-mode', enabled)
  }, [enabled])

  return [enabled, setDarkMode]
}
