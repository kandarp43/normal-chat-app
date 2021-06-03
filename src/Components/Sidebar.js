import React from 'react'
import { Nav, Tab } from 'react-bootstrap'

function Sidebar({ id }) {
  return (
    <div style={{ width: '250px' }} className='d-flex flex-column'>
      <Tab.Container>
        <Nav variant='tabs' className='justify-content-center'>
          <Nav.Item>
            <Nav.Link eventKey='conversations'>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='contacts'>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
      </Tab.Container>
    </div>
  )
}

export default Sidebar
