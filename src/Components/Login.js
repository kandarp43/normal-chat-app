import { useRef } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

function Login({ onIdSubmit }) {
  const idRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    onIdSubmit(idRef.current.value)
    idRef.current.value = ''
  }

  const createNewId = () => {
    onIdSubmit(uuidV4())
  }

  return (
    <Container className='align-items-center d-flex' style={{ height: '90vh' }}>
      <Form onSubmit={handleSubmit} className='w-100'>
        <Form.Group className='m-1'>
          <Form.Label>Enter your Id</Form.Label>
          <Form.Control type='text' ref={idRef} required />
        </Form.Group>

        <Button className='m-1' type='submit'>
          Login
        </Button>

        <Button onClick={createNewId} variant='secondary' className=''>
          Create new Id
        </Button>
      </Form>
    </Container>
  )
}

export default Login
