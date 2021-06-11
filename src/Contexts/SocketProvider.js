import React, { createContext, useContext } from 'react'

const SocketContext = createContext()

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider() {
  return <div></div>
}
