import React, { useState } from 'react'

// hook //
import useDebounce from '../../../Hooks/Debounce/useDebounce'

const Debounce = () => {
  const [count, setCount] = useState(10)
  useDebounce(() => alert(`now run api query count: ${count}`), 1000, [count])
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  )
}

export default Debounce
