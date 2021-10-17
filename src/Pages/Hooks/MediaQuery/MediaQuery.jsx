import React from 'react'

// hook //
import useMediaQuery from '../../../Hooks/MediaQuery/useMediaQuery'

const MediaQuery = () => {
  const isLarge = useMediaQuery('(min-width: 600px)')

  return <div>Large: {isLarge.toString()}</div>
}

export default MediaQuery
