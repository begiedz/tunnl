'use client'
import { useState } from 'react'
import Chatbar from './chat/chatbar'
import MessageField from './chat/message-field'
import MessageInput from './chat/message-input'
import Details from './details'
import List from './list'

const Chat = () => {
  const [showDetails, setShowDetails] = useState(false)
  const toggleDetails = () => {
    setShowDetails((prev) => !prev)
  }
  return (
    <>
      <List />

      <main className="flex h-full flex-[2] flex-col items-center justify-between rounded-xl bg-background last:pb-4 [&>*]:px-4">
        <Chatbar onInfoClick={toggleDetails} />
        <MessageField />
        <MessageInput />
      </main>

      {showDetails && <Details />}
    </>
  )
}

export default Chat
