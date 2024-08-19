const ChatList = () => {
  const chatList = [];

  for (let i = 0; i < 20; i++) {
    chatList.push(<div key={i}>Chat</div>);
  }

  console.log(chatList);

  return <section>{chatList}</section>;
};

export default ChatList;
