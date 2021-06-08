import React, { createContext, useContext } from 'react'
import useLocalstorage from '../Hooks/useLocalstorage'

const contactsContext = createContext()

export function useContacts() {
  return useContext(contactsContext)
}

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useLocalstorage('contacts', [])

  const createContact = (id, name) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }]
    })
  }
  return (
    <contactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </contactsContext.Provider>
  )
}
