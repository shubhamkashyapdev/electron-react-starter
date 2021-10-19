import React from 'react'
import './IconButton.scss'

const IconButton = ({ className = [''], text = 'Default', Icon, onClick }) => {
  return (
    <button onClick={onClick} className={(className.join(' '), 'btn')}>
      <span>{text}</span>
      <span>
        <Icon />
      </span>
    </button>
  )
}

export default IconButton
