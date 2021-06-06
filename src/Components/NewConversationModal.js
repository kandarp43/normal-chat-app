import React, { useRef } from 'react'
import { Form, Modal } from 'react-bootstrap'

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
        </Form>
      </Modal.Body>
    </>
  )
}

export default NewConversationModal
