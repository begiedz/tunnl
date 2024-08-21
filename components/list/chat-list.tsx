import ChatTile from './chat-tile'

const ChatList = () => {
  const chatList = []

  for (let i = 1; i <= 21; i++) {
    chatList.push(<ChatTile key={i} index={i} />)
  }

  return (
    <section className="flex w-full flex-col gap-2 overflow-scroll">
      {chatList}
    </section>
  )
}

export default ChatList
