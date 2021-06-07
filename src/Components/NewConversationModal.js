import React, { useRef } from 'react'
import { Button, Form, ListGroup, Modal } from 'react-bootstrap'
import { useContacts } from '../Contexts/ContactsProvider'

function NewConversationModal({ closeModal }) {
  const idRef = useRef()
  const nameRef = useRef()
  const { contacts, createContact } = useContacts()
  function handleSubmit(e) {
    e.preventDefault()
    createContact(idRef.current.value, nameRef.current.value)
    closeModal()
  }
  return (
    <>
      <Modal.Header> create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.length === 0
            ? 'No Contacts'
            : contacts.map((contact) => (
                <Form.Group key={contact.id}>{contact.name}</Form.Group>
              ))}
        </Form>
      </Modal.Body>
    </>
  )
}

export default NewConversationModal
