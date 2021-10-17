import useStateWithValidation from '../../../Hooks/StateWithValidation/useStateWithValidation'

const StateWithValidation = () => {
  const [username, setUsername, isValid] = useStateWithValidation(
    (name) => name.length > 5,
    ''
  )

  return (
    <>
      <div>Valid: {isValid.toString()}</div>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </>
  )
}

export default StateWithValidation
