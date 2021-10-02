import { useState } from 'react'

export function useForm<T>(initialState: T) {
  const [fields, setFields] = useState<T>(initialState)
  const createChangeHandler =
    (key: keyof T) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target
      setFields((prev: T) => ({ ...prev, [key]: value }))
    }
  return { fields, createChangeHandler }
}
