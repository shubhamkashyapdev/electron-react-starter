import React from 'react'

// hook //
import useArray from '../../../Hooks/Array/useArray'

const Array = () => {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 3, 5, 7, 9, 11, 13, 15,
  ])
  return (
    <div>
      <div>{array.join(', ')}</div>
      <button onClick={() => push(7)}> Add 7</button>
      <button onClick={() => update(1, 9)}>Change second element to 9</button>
      <button onClick={() => remove(1)}>Remove second element</button>
      <button onClick={() => filter((n) => n < 3)}>
        Keep numbers less than 4
      </button>
      <button onClick={() => set([1, 2])}>Set to 1,2</button>
      <button onClick={clear}>Clear</button>
    </div>
  )
}

export default Array
