import React, { useState } from 'react'

// hook //
import useUpdateEffect from '../../../Hooks/UpdateEffect/useUpdateEffect'

const UpdateEffect = () => {
  const [count, setCount] = useState(0)
  useUpdateEffect(() => alert(count), [count])
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  )
}

export default UpdateEffect
