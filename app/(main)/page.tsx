import { useState } from 'react'
import Chat from '../../components/chat'
import Details from '../../components/details'
import List from '../../components/list'
import { redirect } from 'next/navigation'

export default function Home() {
  const user = true
  if (!user) {
    redirect('/sign-in')
  }

  return <Chat />
}
