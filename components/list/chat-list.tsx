import { useEffect, useState } from 'react'
import { useUser } from '@/context/UserContext'
import { doc, DocumentData, getDoc, onSnapshot } from 'firebase/firestore'
import ChatTile from './chat-tile'
import { db } from '@/lib/firebase'

interface ChatItem {
  receiverId: string
  chatId: string
  updatedAt: number
}

const ChatList = () => {
  const { currentUser } = useUser()

  const [chats, setChats] = useState<DocumentData | undefined>([])

  useEffect(() => {
    if (!currentUser || !currentUser.id) {
      return
    }
    const unSub = onSnapshot(
      doc(db, 'userchats', currentUser.id),
      async (res) => {
        const items = res.data()?.chats

        const promises = items.map(async (item: DocumentData) => {
          const userDocRef = doc(db, 'users', item?.receiverId)
          const userDocSnap = await getDoc(userDocRef)

          const user = userDocSnap.data()
          return { ...item, user }
        })

        const chatData = await Promise.all(promises)
        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt))
      }
    )

    return () => {
      unSub()
    }
  }, [currentUser])
  return (
    <section className="flex w-full flex-col gap-2 overflow-scroll">
      {chats?.map((chat: DocumentData | undefined) => {
        return <ChatTile chat={chat} key={chat?.chatId} />
      })}
    </section>
  )
}

export default ChatList
