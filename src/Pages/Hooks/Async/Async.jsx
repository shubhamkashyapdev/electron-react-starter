import React from 'react'
import useAsync from '../../../Hooks/Async/useAsync'

const Async = () => {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = false
      setTimeout(() => {
        success ? resolve('Hi') : reject('Error')
      }, 1000)
    })
  })
  return (
    <div>
      <div>Loading: {loading.toString()}</div>
      <div>{error}</div>
      <div>{value}</div>
    </div>
  )
}

export default Async
