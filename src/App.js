import { Container } from 'react-bootstrap'
import useLocalstorage from '../Hooks/useLocalstorage'
import Login from './Components/Login'

function App() {
  const [id, setId] = useLocalstorage()
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
