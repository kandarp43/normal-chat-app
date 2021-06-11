import React from 'react'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import { ContactsProvider } from './Contexts/ContactsProvider'
import { ConversationsProvider } from './Contexts/ConversationsProvider'
import { SocketProvider } from './Contexts/SocketProvider'
import useLocalstorage from './Hooks/useLocalstorage'

function App() {
  const [id, setId] = useLocalstorage('id')

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )
  return id ? dashboard : <Login onIdSubmit={setId} />
}

export default App
