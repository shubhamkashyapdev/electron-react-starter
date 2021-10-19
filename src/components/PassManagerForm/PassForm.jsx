import React from 'react'
import './PassForm.scss'
// hook //
import useStateWithValid from '../../Hooks/StateWithValidation/useStateWithValidation'
// icons //
import { FaPlus } from 'react-icons/fa'
import IconButton from '../IconButton/IconButton'

const Form = () => {
  return (
    <form className='pass_form'>
      <div className='pass_form_title'>
        <input
          className='input input_title'
          type='text'
          name='title'
          id='title'
          placeholder='Title'
        />
      </div>
      <div className='pass_form_password'>
        <input
          className='input input_password'
          type='text'
          name='title'
          id='title'
          placeholder='Password'
        />
      </div>
      <button className='input_btn btn'>
        <span>Add</span>
        <span>
          <FaPlus />
        </span>
      </button>
    </form>
  )
}

export default Form
