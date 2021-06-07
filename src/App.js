import React from 'react'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import useLocalstorage from './Hooks/useLocalstorage'

function App() {
  const [id, setId] = useLocalstorage('id')

  const dashboard =(
    
  )
  return id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />
}

export default App
