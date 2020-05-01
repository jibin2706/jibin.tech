import React, { useEffect } from 'react'
import useDarkMode from 'use-dark-mode'

import './toggleButton.scss'

function ToggleThemeButton() {
  const darkMode = useDarkMode(false)
  useEffect(() => {
    const color = darkMode.value ? '#222222' : '#0b69a3'
    document.querySelector('meta[name="theme-color"]').setAttribute('content', color)
  })

  return (
    <button
      role="switch"
      defaultChecked={darkMode.value}
      onClick={darkMode.toggle}
      aria-hidden="true"
      aria-checked={darkMode.value}
      className="toggle-button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={darkMode.value ? '#cbd5e0' : '#4a5568'}
        width="20"
        style={{ display: 'block' }}
      >
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 000 16V4z" />
      </svg>
    </button>
  )
}

export default ToggleThemeButton
