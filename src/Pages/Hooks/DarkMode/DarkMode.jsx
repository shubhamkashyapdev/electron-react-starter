import React from 'react'
import './DarkMode.scss'

// hook //
import useDarkMode from '../../../Hooks/DarkMode/useDarkMode'

const DarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode()
  return (
    <button
      onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}
      style={{ border: `1px solid ${darkMode ? 'white' : 'black'}` }}
    >
      Toggle Dark Mode
    </button>
  )
}

export default DarkMode
