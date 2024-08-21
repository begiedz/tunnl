import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const ChatTile = ({ index }: { index: number }) => {
  return (
    <button className="max-w-13 flex items-center space-x-2 rounded-md p-2 text-left hover:bg-slate-200">
      <Avatar className="size-14">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>{index}</AvatarFallback>
      </Avatar>
      <div className="w-full">
        <h3 className="font-bold">{`User ${index}`}</h3>
        <div className="flex flex-row justify-between">
          <div>
            <span className="line-clamp-1">You: Lorem, ipsum dolor.</span>
          </div>
          <div>10min</div>
        </div>
      </div>
    </button>
  )
}

export default ChatTile
