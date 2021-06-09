import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useConversations } from '../Contexts/ConversationsProvider'

function OpenConversation() {
  const [text, setText] = useState('')
  const { sendMessage, selectedConversation } = useConversations()
  function handleSubmit(e) {
    e.preventDefault()
    sendMessage(
      selectedConversation.recipients.map((recipient) => recipient.id)
    )
  }
  return (
    <div className='d-flex flex-column flex-grow-1'>
      <div className='flex-grow-1 overflow-auto'></div>
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
          </InputGroup>
          <InputGroup.Append>
            <Button type='submit'>Send</Button>
          </InputGroup.Append>
        </Form.Group>
      </Form>
    </div>
  )
}

export default OpenConversation
