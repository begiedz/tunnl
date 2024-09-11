'use client'

import { auth } from '@/lib/firebase'
import { onAuthStateChanged, User } from '@firebase/auth'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface AuthContextProps {
  user: User | null
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
      } else {
        console.log('no user')
      }
      setUser(user)
    })

    return () => {
      unSub()
    }
  }, [])
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
