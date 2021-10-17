import { useState } from 'react'
import useEventListener from '../../../Hooks/EventListener/EventListener'

const EventListener = () => {
  const [key, setKey] = useState('')
  useEventListener('keydown', (e) => {
    setKey(e.key)
  })

  return <div>Last Key: {key}</div>
}

export default EventListener
