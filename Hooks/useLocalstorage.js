import { useState } from 'react'

const PREFIX = 'Normal-chat'
function useLocalstorage(key, initialValue) {
  const prefixedKey = PREFIX + key
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)
    if (jsonValue != null) return JSON.parse(jsonValue)
  })
}

export default useLocalstorage
