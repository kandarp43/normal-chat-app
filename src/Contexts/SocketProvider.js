import React, { createContext, useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const socketContext = createContext()

export function useSocket() {
  return useContext(socketContext)
}

export function SocketProvider({ children, id }) {
  const [socket, setSocket] = useState()
  useEffect(() => {
    const newSocket = io('http://localhost:5000', { query: { id } })
    setSocket(newSocket)

    return () => newSocket.close()
  }, [id])
  return (
    <socketContext.Provider value={{ socket }}>
      {children}
    </socketContext.Provider>
  )
}
