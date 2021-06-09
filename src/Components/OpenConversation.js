import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

function OpenConversation() {
  return (
    <div className='d-flex flex-column flex-grow-1'>
      <div className='flex-grow-1 overflow-auto'></div>
      <Form>
        <Form.Group>
          <InputGroup>
        <Form.Control as='textarea' required value={text}
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  )
}

export default OpenConversation
