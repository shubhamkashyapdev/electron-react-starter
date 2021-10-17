import React from 'react'
import './Header.scss'

// components //
import BorderAnim from '../BorderAnim/BorderAnim'
import NavLink from './Link/Link'

const Header = () => {
  return (
    <div className='header'>
      {/* <div className='header-box'>
        <h3>Header!!</h3>
      </div> */}

      <nav className='nav_bar'>
        <div className='logo'>Logo</div>
        <ul className='nav_list'>
          <li>
            <BorderAnim>
              <NavLink path='/' name='Pass Manager' />
            </BorderAnim>
          </li>
          <li>
            <BorderAnim>
              <NavLink path='/img-manager' name='Img Manager' />
            </BorderAnim>
          </li>
          <li>
            <BorderAnim>
              <NavLink path='/vdo-manager' name='Vdo Manager' />
            </BorderAnim>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
