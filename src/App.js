import React from 'react'
import Login from './Components/Login'
import useLocalstorage from './Hooks/useLocalstorage'

function App() {
  const [id, setId] = useLocalstorage('id')
  return (
    <>
      {id}
      <Login onIdSubmit={setId} />
    </>
  )
}

export default App
