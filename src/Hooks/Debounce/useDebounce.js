import React, { useEffect } from 'react'
import useTimeout from '../Timeout/useTimeout'
// to run something after a delay like a search query after the user is finished typing //

export default function useDebounce(cb, delay, dependencies) {
  const [reset, clear] = useTimeout(cb, delay)
  useEffect(reset, [...dependencies, reset])
  useEffect(clear, [])
}
