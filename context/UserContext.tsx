'use client'

import { db } from '@/lib/firebase'
import { doc, getDoc } from '@firebase/firestore'
import { createContext, ReactNode, useContext, useState } from 'react'

interface UserContextProps {
  currentUser: any | null
  isLoading: boolean
  fetchUserInfo: (uid: string | null) => void
}

const UserContext = createContext<UserContextProps | undefined>(undefined)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchUserInfo = async (uid: string | null) => {
    if (!uid) {
      setCurrentUser(null)
      setIsLoading(false)
      return
    }
    try {
      const docRef = doc(db, 'users', uid)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setCurrentUser(docSnap.data())
      } else {
        setCurrentUser(null)
      }
    } catch (error) {
      console.error(error)
      setCurrentUser(null)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <UserContext.Provider value={{ currentUser, isLoading, fetchUserInfo }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
