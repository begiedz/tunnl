import { Minus, Plus } from 'lucide-react'
import ChatList from './list/chat-list'
import UserInfo from './list/user-info'
import { Button } from './ui/button'
import Searchbar from './ui/searchbar'
import { useState } from 'react'

const List = () => {
  const [addMode, setAddMode] = useState(true)
  return (
    <aside className="flex flex-[1] flex-col gap-2 rounded-xl bg-gray-50">
      <UserInfo />

      <div className="flex items-center gap-2">
        <Searchbar />
        <Button
          size="sm"
          variant="outline"
          className="h-full"
          onClick={() => setAddMode((prev) => !prev)}
        >
          {addMode ? <Plus size={16} /> : <Minus size={16} />}
        </Button>
      </div>

      <h2 className="text-2xl font-bold">Chats</h2>
      <ChatList />
    </aside>
  )
}

export default List
