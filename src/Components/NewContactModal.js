import React, { useRef } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

function NewContactModal({ closeModal }) {
  const idRef = useRef()
  const nameRef = useRef()
  function handleSubmit(e) {
    e.preventDefault()

    // createContact(idRef.current.value, nameRef.current.value)
    closeModal()
  }
  return (
    <>
      <Modal.Header> create Contact</Modal.Header>
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

export default NewContactModal
