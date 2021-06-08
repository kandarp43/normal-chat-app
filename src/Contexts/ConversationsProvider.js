import React, { createContext, useContext } from 'react'
import useLocalstorage from '../Hooks/useLocalstorage'

const conversationContext = createContext()

export function useConversations() {
  return useContext(conversationContext)
}

export function ConversationsProvider({ children }) {
  const [conversations, setConversation] = useLocalstorage('conversations', [])

  const createConversation = (id, name) => {
    setConversation((prevConversation) => {
      return [...prevConversation, { id, name }]
    })
  }
  return (
    <conversationContext.Provider value={{ conversations, createConversation }}>
      {children}
    </conversationContext.Provider>
  )
}
