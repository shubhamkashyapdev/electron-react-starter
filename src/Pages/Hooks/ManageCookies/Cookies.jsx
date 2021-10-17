import useCookie from '../../../Hooks/ManageCookies/useCookies'

const Cookies = () => {
  const [value, update, remove] = useCookie('name', 'John')

  return (
    <>
      <div>{value}</div>
      <button onClick={() => update('Sally')}>Change Name To Sally</button>
      <button onClick={remove}>Delete Name</button>
    </>
  )
}

export default Cookies
