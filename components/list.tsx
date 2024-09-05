'use client'
import AddUser from './list/add-user'
import ChatList from './list/chat-list'
import OwnerInfo from './list/owner-info'
import Searchbar from './ui/searchbar'

const List = () => {
  return (
    <aside className="flex flex-[1] flex-col gap-4 rounded-xl bg-background last:pb-4 [&>*]:px-4">
      <OwnerInfo />
      <h2 className="text-2xl font-bold">Chats</h2>
      <div className="flex items-center gap-2">
        <Searchbar />
        <AddUser />
      </div>
      <ChatList />
    </aside>
  )
}

export default List
