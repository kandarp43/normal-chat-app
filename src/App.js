import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Login from './Components/Login'

function App() {
  const [id, setId] = useState()
  return (
    <>
      <Login onIdSubmit={setId} />
      <Container className='justify-content-center d-flex'>
        {''}
        {id}
      </Container>
    </>
  )
}

export default App
