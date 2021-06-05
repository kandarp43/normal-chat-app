import React, { useRef } from 'react'
import { Form, Modal } from 'react-bootstrap'

function NewContactModal({ closeModal }) {
  const idRef = useRef()
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <>
      <Modal.Header> create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' ref={idRef} required></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
    </>
  )
}

export default NewContactModal
