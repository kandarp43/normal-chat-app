import React, { createContext, useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'

const socketContext = createContext()

export function useSocket() {
  return useContext(socketContext)
}

export function SocketProvider({ id, children }) {
  const [socket, setSocket] = useState()

  useEffect(() => {
    var connectionOptions = {
      'force new connection': true,
      reconnectionAttempts: 'Infinity',
      timeout: 10000,
      transports: ['websocket', 'polling', 'flashsocket'],
    }
    const newSocket = io(
      'http://localhost:5000',
      { query: { id } },
      connectionOptions
    )
    setSocket(newSocket)

    return () => newSocket.close()
  }, [id])
  return (
    <socketContext.Provider value={socket}>{children}</socketContext.Provider>
  )
}
