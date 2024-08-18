import ChatList from "./chat-list";
import UserInfo from "./user-info";

const List = () => {
  return (
    <aside className="bg-yellow-500 flex-[1]">
      <UserInfo></UserInfo>
      <ChatList></ChatList>
    </aside>
  );
}

export default List;