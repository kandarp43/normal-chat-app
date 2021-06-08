import React, { createContext, useContext } from 'react'
import useLocalstorage from '../Hooks/useLocalstorage'

const conversationContext = createContext()

export function useConversations() {
  return useContext(conversationContext)
}

export function ConversationsProvider({ children }) {
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
