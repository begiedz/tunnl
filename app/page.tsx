'use client'
import Chat from '../components/chat'
import { useUser } from '@/context/UserContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const { isLoading, currentUser } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!currentUser) {
      router.push('/sign-in')
    }
  }, [currentUser, router])

  if (isLoading)
    return (
      <div className="flex h-dvh w-dvw items-center justify-center">
        Loading...
      </div>
    )
  return <Chat />
}
