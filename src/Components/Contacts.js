import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../Contexts/ContactsProvider'

function Contacts() {
  const { contacts } = useContacts()
  return (
    <>
      <ListGroup variant='flush'>
        {contacts.length === 0
          ? 'No Contacts'
          : contacts.map((contact) => (
              <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
            ))}
      </ListGroup>
    </>
  )
}

export default Contacts
