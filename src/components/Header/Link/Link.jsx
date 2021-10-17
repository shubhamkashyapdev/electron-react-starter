import React from 'react'
import './Link.scss'
import { Link } from 'react-router-dom'

const NavLink = ({ path, name }) => {
  return (
    <Link className='link' to={path}>
      {name}
    </Link>
  )
}

export default NavLink
