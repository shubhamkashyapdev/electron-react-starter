import React, { useState } from 'react'

export default function useArray(defaultVal) {
  const [array, setArray] = useState(defaultVal)

  function push(element) {
    //setArray((a) => [...a, element]) // this is not performant
    setArray((a) => [...a, element])
  }
  function filter(cb) {
    setArray((a) => a.filter(cb))
  }

  function update(index, newElement) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1),
    ])
  }

  function remove(index) {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.lenth - 1)])
  }

  function clear() {
    setArray([])
  }
  return { array, set: setArray, push, remove, filter, update, clear }
}
