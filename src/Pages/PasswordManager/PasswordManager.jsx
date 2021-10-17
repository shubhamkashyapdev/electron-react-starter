import React, { useState, useRef } from 'react'

import PasswordField from '../../components/PasswordManager/PasswordField/PasswordField'
import './PasswordManager.scss'

// hooks //
import useCopyToClipboard from '../../ProjectHooks/useCopyToClipboard'

const PasswordManager = ({ passwords }) => {
  const [copyToClipboard, { success }] = useCopyToClipboard()
  return (
    <div className='password_manager'>
      {passwords.map((item) => (
        <>
          <div className='item_container'>
            Title: {item.title}, Password:{item.password}
          </div>
          <button
            onClick={() => copyToClipboard(item.password)}
            className='btn'
          >
            {success ? 'Coppied' : 'Copy'}
          </button>
        </>
      ))}
    </div>
  )
}

PasswordManager.defaultProps = {
  passwords: [{ password: 'Target@100k$#@!', title: 'Saffron Gmail' }],
}

export default PasswordManager
