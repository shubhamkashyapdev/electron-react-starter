import React, { useState } from 'react'

// hook //
import useStateWithHistory from '../../../Hooks/StateWithHistory/useStateWithHistory'

const StateWithHistory = () => {
  const [count, setCount, { history, pointer, back, forward, go }] =
    useStateWithHistory([1])
  const [name, setName] = useState('Kyle')

  console.log(history)

  return (
    <div>
      <div>{count}</div>
      <div>{history.join(', ')}</div>
      <div>Pointer - {pointer}</div>
      <div>{name}</div>
      <button onClick={() => setCount((c) => c * 2)}>Double</button>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <div onClick={back}>Back</div>
      <div onClick={forward}>Forward</div>
      <button onClick={go(2)}>Go to index 2</button>
      <button onClick={() => setName('John')}>Change Name</button>
    </div>
  )
}

export default StateWithHistory
