import React from 'react'
import { Form, Modal } from 'react-bootstrap'

function NewContactModal({ closeModal }) {
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <>
      <Modal.Header> create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
    </>
  )
}

export default NewContactModal
