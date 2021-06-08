import React from 'react'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import { ContactsProvider } from './Contexts/ContactsProvider'
import { ConversationsProvider } from './Contexts/ConversationsProvider'
import useLocalstorage from './Hooks/useLocalstorage'

function App() {
  const [id, setId] = useLocalstorage('id')

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  )
  return id ? dashboard : <Login onIdSubmit={setId} />
}

export default App
