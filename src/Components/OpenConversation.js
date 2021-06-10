import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useConversations } from '../Contexts/ConversationsProvider'

function OpenConversation() {
  const [text, setText] = useState('')
  const { sendMessage, selectedConversation } = useConversations()
  function handleSubmit(e) {
    e.preventDefault()
    sendMessage(
      selectedConversation.recipients.map((recipient) => recipient.id),
      text
    )
    setText('')
  }
  return (
    <div className='d-flex flex-column flex-grow-1'>
      <div className='flex-grow-1 overflow-auto'>
        <div className='h-100 d-flex flex-column align-item-start justify-content-end px-3'></div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='m-2'>
          <InputGroup>
            <Form.Control
              as='textarea'
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: '40px', resize: 'none' }}
            />
            <Button type='submit'>Send</Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  )
}

export default OpenConversation
