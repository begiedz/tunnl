import Chatbar from './chat/chatbar'
import MessageField from './chat/message-field'
import MessageInput from './chat/message-input'
const Chat = ({ onInfoClick }: { onInfoClick: () => void }) => {
  return (
    <main className="flex h-full flex-[2] flex-col items-center justify-between rounded-xl bg-background last:pb-4 [&>*]:px-4">
      <Chatbar onInfoClick={onInfoClick} />
      <MessageField />
      <MessageInput />
    </main>
  )
}

export default Chat
