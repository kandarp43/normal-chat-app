import React, { useRef } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

function NewConversationModal({ closeModal }) {
  const idRef = useRef()
  const nameRef = useRef()
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <>
      <Modal.Header> create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type='text' ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' ref={nameRef} required />
          </Form.Group>
          <Button type='submit' className='mt-3'>
            submit
          </Button>
        </Form>
      </Modal.Body>
    </>
  )
}

export default NewConversationModal
