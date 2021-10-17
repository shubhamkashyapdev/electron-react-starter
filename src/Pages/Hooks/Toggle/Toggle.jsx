import React, { useState } from 'react'
import './Toggle.scss'

// hook //
import useToggle from '../../../Hooks/Toggle/useToggle'

const Toggle = () => {
  const [value, toggleValue] = useToggle(false)
  return (
    <div style={{ textAlign: 'center' }}>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}> Toggle </button>
      <button onClick={() => toggleValue(true)}>True</button>
      <button onClick={() => toggleValue(false)}>False</button>
    </div>
  )
}

export default Toggle
