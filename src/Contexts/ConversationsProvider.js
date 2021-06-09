import React, { createContext, useContext } from 'react'
import useLocalstorage from '../Hooks/useLocalstorage'
import { useContacts } from './ContactsProvider'

const conversationContext = createContext()

export function useConversations() {
  return useContext(conversationContext)
}

export function ConversationsProvider({ children }) {
  const [conversations, setConversations] = useLocalstorage('conversations', [])

  const { contacts } = useContacts()

  const createConversation = (recipients) => {
    setConversations((prevConversation) => {
      return [...prevConversation, { recipients, messages: [] }]
    })
  }

  const formattedConversations = conversations.map((conversation) => {
    const recipients = conversations.recipients.map((recipient) => {
      const contact = contacts.find((contact) => {
        return contact.id === recipient
      })
    })
  })
  return (
    <conversationContext.Provider value={{ conversations, createConversation }}>
      {children}
    </conversationContext.Provider>
  )
}
