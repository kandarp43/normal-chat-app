import React, { createContext, useContext } from 'react'
import useLocalstorage from '../Hooks/useLocalstorage'

const conversationContext = createContext()

export function useConversations() {
  return useContext(conversationContext)
}

export function ConversationsProvider({ children }) {
  const [conversations, setConversation] = useLocalstorage('conversations', [])

  const createConversation = (recipient) => {
    setConversation((prevConversation) => {
      return [...prevConversation, { recipient, messages: [] }]
    })
  }
  return (
    <conversationContext.Provider value={{ conversations, createConversation }}>
      {children}
    </conversationContext.Provider>
  )
}
