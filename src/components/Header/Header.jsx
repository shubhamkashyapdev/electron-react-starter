import React from 'react'
import './Header.scss'

// components //
import BorderAnim from '../BorderAnim/BorderAnim'
const Header = () => {
  return (
    <div className='header'>
      {/* <div className='header-box'>
        <h3>Header!!</h3>
      </div> */}
      <BorderAnim>
        <h3>Floating</h3>
      </BorderAnim>
      <BorderAnim>
        <div>Assistant</div>
      </BorderAnim>
    </div>
  )
}

export default Header
