import React, { useRef, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useContacts } from '../Contexts/ContactsProvider'

function NewConversationModal({ closeModal }) {
  const [selectedContactIds, setSelectedContactIds] = useState([])
  const idRef = useRef()
  const nameRef = useRef()
  const { contacts, createContact } = useContacts()

  function handleCheckboxChange(contactId) {
    setSelectedContactIds((prevSelectedContactIds) => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => {
          return contactId !== prevId
        })
      } else {
        return { ...prevSelectedContactIds }
      }
    })
  }

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
                <Form.Group controlId={contact.id} key={contact.id}>
                  <Form.Check
                    type='checkbox'
                    value={selectedContactIds.includes(contact.id)}
                    label={contact.name}
                    onChange={() => handleCheckboxChange(contact.id)}
                  />
                </Form.Group>
              ))}
          <Button type='submit' className='mt-3'>
            submit
          </Button>
        </Form>
      </Modal.Body>
    </>
  )
}

export default NewConversationModal
