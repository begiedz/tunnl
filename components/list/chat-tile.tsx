import { DocumentData } from 'firebase/firestore'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const ChatTile = (chat: DocumentData) => {
  return (
    <button className="flex w-full space-x-2 rounded-md p-2 text-left transition-colors hover:bg-slate-200">
      <Avatar className="size-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>{'av'}</AvatarFallback>
      </Avatar>
      <div className="w-full">
        <div className="flex flex-row justify-between">
          <h3 className="font-semibold">{`User`}</h3>
          <div className="text-sm text-gray-500">10 min</div>
        </div>
        <span className="line-clamp-1 w-full text-sm text-gray-500">
          {chat.lastMessage}
        </span>
      </div>
    </button>
  )
}

export default ChatTile
