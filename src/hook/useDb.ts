import { DbContext } from '@/context/DbContext'
import { useContext } from 'react'




export function useDb() {
  const value = useContext(DbContext)
  return value
}