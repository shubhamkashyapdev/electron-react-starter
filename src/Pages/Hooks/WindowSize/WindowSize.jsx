import useWindowSize from '../../../Hooks/WindowSize/useWindowSize'

const WindowSize = () => {
  const { width, height } = useWindowSize()

  return (
    <div>
      {width} x {height}
    </div>
  )
}

export default WindowSize
