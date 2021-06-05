import React from 'react'
import { Form, Modal } from 'react-bootstrap'

function NewConversationModal({ closeModal }) {
  return (
    <>
      <Modal.Header> create Contact</Modal.Header>
      <Modal.Body>
          <Form></Form>
      </Modal.Body>
    </>
  )
}

export default NewConversationModal
