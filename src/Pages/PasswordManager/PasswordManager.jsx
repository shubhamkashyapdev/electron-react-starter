import React, { useState, useRef } from 'react'

import PasswordField from '../../components/PasswordManager/PasswordField/PasswordField'
import './PasswordManager.scss'

// hooks //

const PasswordManager = ({ passwords }) => {
  return (
    <div className='password_manager'>
      {/* {passwords.map((passsword) => (
        <div>{password.password}</div>
      ))} */}
      <h1>Password Manager</h1>
    </div>
  )
}

PasswordManager.defaultProps = {
  passwords: [{ password: 'Target@100k$#@!', title: 'Saffron Gmail' }],
}

export default PasswordManager
