'use client'

import { useEffect } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useUser } from '@/context/UserContext'

const AuthHandler = () => {
  const { fetchUserInfo } = useUser()

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        fetchUserInfo(user.uid)
      }
    })

    return () => {
      unSub()
    }
  }, [fetchUserInfo])

  return null
}

export default AuthHandler
