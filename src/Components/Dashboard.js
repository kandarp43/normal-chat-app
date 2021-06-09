import React from 'react'
import { useConversations } from '../Contexts/ConversationsProvider'
import OpenConversation from './OpenConversation'
import Sidebar from './Sidebar'

function Dashboard({ id }) {
  const { selectedConversation } = useConversations()
  return (
    <div className='d-flex' style={{ height: '100vh' }}>
      <Sidebar id={id} />
      <OpenConversation />
    </div>
  )
}

export default Dashboard
