import ChatList from './list/chat-list';
import UserInfo from './list/user-info';

const List = () => {
  return (
    <aside className="flex-[1] rounded-xl bg-yellow-500">
      <UserInfo></UserInfo>
      <ChatList></ChatList>
    </aside>
  );
};

export default List;
