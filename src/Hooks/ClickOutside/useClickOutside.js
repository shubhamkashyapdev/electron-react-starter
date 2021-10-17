import React from 'react'
const useEventListener = () => {}

export default function (ref, cb) {
  useEventListener(
    'click',
    (e) => {
      if (ref.current === null || ref.current.contains(e.target)) return cb(e)
    },
    document
  )
}
