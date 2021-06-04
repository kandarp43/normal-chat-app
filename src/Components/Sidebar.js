import React, { useState } from 'react'
import { Nav, Tab } from 'react-bootstrap'
import Conversations from './Conversations'
import Contacts from './Contacts'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

function Sidebar() {
  const [activekey, setActivekey] = useState(CONVERSATIONS_KEY)
  return (
    <div style={{ width: '250px' }} className='d-flex flex-column'>
      <Tab.Container activeKey={activekey} onSelect={setActivekey}>
        <Nav variant='tabs' className='justify-content-center'>
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className='border border-top-0 border-bottom-0'>
          <Tab.Pane eventKey={CONVERSATIONS_KEY} className=''>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  )
}

export default Sidebar
