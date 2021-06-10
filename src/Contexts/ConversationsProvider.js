import React, { createContext, useContext, useState } from 'react'
import useLocalstorage from '../Hooks/useLocalstorage'
import { useContacts } from './ContactsProvider'

const conversationContext = createContext()

export function useConversations() {
  return useContext(conversationContext)
}

export function ConversationsProvider({ id, children }) {
  const [conversations, setConversations] = useLocalstorage('conversations', [])
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)

  const { contacts } = useContacts()

  const createConversation = (recipients) => {
    setConversations((prevConversation) => {
      return [...prevConversation, { recipients, messages: [] }]
    })
  }

  const addMessageToConversation = ({ recipients, text, sender }) => {
    setConversations((prevConversation) => {
      let madeChange = false
      const newMessage = { sender, text }
      const newConversations = prevConversation.map((conversation) => {
        if (arrayEquality(conversation.recipients, recipients)) {
          madeChange = true
          return {
            ...conversation,
            messages: [...conversation.messages, newMessage],
          }
        }
        return conversation
      })
      if (madeChange) {
        return newConversations
      } else {
        return [...prevConversation, { recipients, messages: [newMessage] }]
      }
    })
  }

  const sendMessage = (recipients, text) => {
    addMessageToConversation({ recipients, text, sender: id })
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
    selectedConversation: formattedConversations[selectedConversationIndex],
    sendMessage,
    selectedConversationIndex: setSelectedConversationIndex,
    createConversation,
  }
  return (
    <conversationContext.Provider value={value}>
      {children}
    </conversationContext.Provider>
  )
}

function arrayEquality(a, b) {
  if (a.length !== b.length) {
    return false
  }
  a.sort()
  b.sort()

  return a.every((element, index) => {
    return element === b[index]
  })
}
