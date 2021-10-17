import React, { useState } from 'react'

// hook //
import usePrevious from '../../../Hooks/Previous/usePrevious'

const Previous = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Kyle')
  const previousCount = usePrevious(count)

  return (
    <div>
      <div>
        {count} - {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setName('john')}>Change Name</button>
    </div>
  )
}

export default Previous
