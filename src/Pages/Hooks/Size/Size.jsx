import React, { useRef } from 'react'
import useSize from '../../../Hooks/Size/useSize'

const Size = () => {
  const ref = useRef()
  const size = useSize(ref)
  return (
    <div>
      <div>{JSON.stringify(size)}</div>
      <textarea ref={ref}></textarea>
    </div>
  )
}

export default Size
