'use client'
import Chat from '../../components/chat'
import { useUser } from '@/context/UserContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const { isLoading, currentUser } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!currentUser) {
      console.log(currentUser)
      router.push('/sign-in')
    }
  }, [currentUser])

  if (isLoading) return <div>Loading...</div>
  return <Chat />
}
