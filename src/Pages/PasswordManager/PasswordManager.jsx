import React, { useState, useRef } from 'react'
import './PasswordManager.scss'

// hooks //
import useCopyToClipboard from '../../ProjectHooks/useCopyToClipboard'

// icons //
import { FaCopy } from 'react-icons/fa'
import IconButton from '../../components/IconButton/IconButton'

// components //
import PassForm from '../../components/PassManagerForm/PassForm'

const PasswordManager = ({ passwords }) => {
  const [copyToClipboard, { success, setSuccess }] = useCopyToClipboard()
  if (success) {
    setTimeout(() => {
      setSuccess(false)
    }, 5000)
  }
  return (
    <div className='password_manager'>
      <PassForm />
      {passwords.map((item) => (
        <div className='item_container'>
          <div className='text_box'>
            Title: {item.title}, Password:{item.password}
          </div>
          <button
            onClick={() => copyToClipboard(item.password)}
            className='btn'
          >
            <span>{success ? 'Coppied' : 'Copy'}</span>{' '}
            <span style={{ marginLeft: '5px', transform: 'translateY(2px)' }}>
              <FaCopy />
            </span>
          </button>
        </div>
      ))}
    </div>
  )
}

PasswordManager.defaultProps = {
  passwords: [{ password: 'Target@100k$#@!', title: 'Saffron Gmail' }],
}

export default PasswordManager
