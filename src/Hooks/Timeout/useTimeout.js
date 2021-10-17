import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function useTimeout(cb, delay) {
  const cbRef = useRef(cb)
  const timeoutRef = useRef(delay)

  useEffect(() => {
    cbRef.current = cb
  }, [cb])

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => cbRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return [reset, clear]
}
