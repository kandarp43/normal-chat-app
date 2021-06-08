import React, { createContext, useContext } from 'react'
import useLocalstorage from '../Hooks/useLocalstorage'

const conversationContext = createContext()

export function useConversations() {
  return useContext(conversationContext)
}

export function ConversationsProvider({ children }) {
  const [conversations, setContacts] = useLocalstorage('contacts', [])

  const createConversation = (id, name) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { id, name }]
    })
  }
  return (
    <conversationContext.Provider value={{ conversations, createConversation }}>
      {children}
    </conversationContext.Provider>
  )
}
