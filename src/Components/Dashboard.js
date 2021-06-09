import React from 'react'
import OpenConversation from './OpenConversation'
import Sidebar from './Sidebar'

function Dashboard({ id }) {
  return (
    <div className='d-flex' style={{ height: '100vh' }}>
      <Sidebar id={id} />
      <OpenConversation />
    </div>
  )
}

export default Dashboard
