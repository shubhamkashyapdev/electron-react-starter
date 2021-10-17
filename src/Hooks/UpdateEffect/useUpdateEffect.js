import React, { useRef, useEffect } from 'react'

// this hook will render the code on an update rendering and not on first render

export default function useUpdateEffect(cb, dependencies) {
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender.current = false
      return
    }
    return cb()
  }, dependencies)
}
