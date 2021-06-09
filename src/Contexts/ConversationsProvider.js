import React, { createContext, useContext, useState } from 'react'
import useLocalstorage from '../Hooks/useLocalstorage'
import { useContacts } from './ContactsProvider'

const conversationContext = createContext()

export function useConversations() {
  return useContext(conversationContext)
}

export function ConversationsProvider({ children }) {
  const [conversations, setConversations] = useLocalstorage('conversations', [])
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)

  const { contacts } = useContacts()

  const createConversation = (recipients) => {
    setConversations((prevConversation) => {
      return [...prevConversation, { recipients, messages: [] }]
    })
  }

  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map((recipient) => {
      const contact = contacts.find((contact) => {
        return contact.id === recipient
      })
      const name = (contact && contact.name) || recipient
      return { id: recipient, name }
    })
    const selected = index === selectedConversationIndex
    return { ...conversation, recipients, selected }
  })

  const value = {
    conversations: formattedConversations,
    selectedConversation: formattedConversations,
    selectedConversationIndex: setSelectedConversationIndex,
    createConversation,
  }
  return (
    <conversationContext.Provider value={value}>
      {children}
    </conversationContext.Provider>
  )
}
