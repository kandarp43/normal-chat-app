import React, { createContext, useContext } from 'react'
import useLocalstorage from '../Hooks/useLocalstorage'

const conversationContext = createContext()

export function useContacts() {
  return useContext(conversationContext)
}

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useLocalstorage('contacts', [])

  const createContact = (id, name) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }]
    })
  }
  return (
    <conversationContext.Provider value={{ contacts, createContact }}>
      {children}
    </conversationContext.Provider>
  )
}
