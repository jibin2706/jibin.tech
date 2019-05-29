import React, { useEffect } from 'react'
import Toggle from 'react-toggle'
import useDarkMode from 'use-dark-mode'

import './toggleButton.scss'

function ToggleDarkButton() {
  const darkMode = useDarkMode(false)
  useEffect(() => {
    const color = darkMode.value ? '#1f2933' : '#0b69a3'
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute('content', color)
  })

  return (
    <label>
      <Toggle
        defaultChecked={darkMode.value}
        onChange={darkMode.toggle}
        icons={false}
      />
    </label>
  )
}


export default ToggleDarkButton
