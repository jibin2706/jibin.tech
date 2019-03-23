import React from 'react'
import Switch from 'react-switch'
import useDarkMode from 'use-dark-mode'

import './toggleButton.scss'

function ToggleDarkButton() {
  const darkMode = useDarkMode(false)

  return (
    <label>
      <Switch
        onChange={darkMode.toggle}
        checked={darkMode.value}
        offColor="#212121"
        onColor="#F1F1F1"
        onHandleColor="#212121"
        offHandleColor="#F1F1F1"
        uncheckedIcon={false}
        checkedIcon={false}
      />
    </label>
  )
}
export default ToggleDarkButton
