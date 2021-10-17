import React, { useState } from 'react'

// hook //
import useFetch from '../../../Hooks/Fetch/useFetch'

const Fetch = () => {
  const [id, setId] = useState(1)
  const { loading, error, value } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {},
    [id]
  )
  return (
    <div>
      <div>{id}</div>
      <button onClick={() => setId((cId) => cId + 1)}>Increment ID</button>
      <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
    </div>
  )
}

export default Fetch
