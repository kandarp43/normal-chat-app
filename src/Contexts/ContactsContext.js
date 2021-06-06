import React, { createContext } from 'react'
import useLocalstorage from '../Hooks/useLocalstorage'

const contactsContext = createContext()

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useLocalstorage('contacts', [])

  const createContact = () => {
      setContacts()
  }
  return (
    <contactsContext.provider value={{ contacts, createContact }}>
      {children}
    </contactsContext.provider>
  )
}
