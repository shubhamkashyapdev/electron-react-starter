import React, { useState, useRef } from 'react'
import './ClickOutside.scss'
// hook //
import useClickOutside from '../../../Hooks/ClickOutside/useClickOutside.js'
import BorderAnim from '../../../components/BorderAnim/BorderAnim'

const ClickOutside = () => {
  const [open, setOpen] = useState(true)
  const modalRef = useRef()

  useClickOutside(modalRef, () => {
    if (open) setOpen(false)
  })
  return (
    <div className='click_outside'>
      <div className='center'>
        {/* <BorderAnim>
        <button>OPEN</button>
      </BorderAnim> */}
        <button>OPEN</button>
      </div>
      <div
        className='modal'
        ref={modalRef}
        style={{ display: open ? 'block' : 'none' }}
      >
        <span>Modal</span>
      </div>
    </div>
  )
}

export default ClickOutside
