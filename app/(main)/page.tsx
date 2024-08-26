import Chat from '../../components/chat'
import { redirect } from 'next/navigation'

export default function Home() {
  const user = false
  if (!user) {
    redirect('/sign-in')
  }

  return <Chat />
}
