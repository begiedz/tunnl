import Message from './message'

const MessageField = () => {
  return (
    <section className="flex h-full w-full flex-col overflow-scroll">
      <Message value="elo" sentTime={2} />
      <Message value="?" sentTime={5} />
      <Message owner value="No siemano!" sentTime={20} />
      <Message value="No siemano!" />
      <Message owner value="co tam" />
      <Message value="gitarka" />
      <Message />
      <Message img="image.jpg" value="xD" />
      <Message
        value="
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit optio numquam modi adipisci repellendus ex perspiciatis, fugit corrupti recusandae. Assumenda!
      "
      />
      <Message
        owner
        value="
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit optio numquam modi adipisci repellendus ex perspiciatis, fugit corrupti recusandae. Assumenda!
      "
      />
      <Message
        owner
        value="
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit optio numquam modi adipisci
      "
      />
      <Message owner value="👍" />
      <Message owner value="👍" />
      <Message owner value="👍" />
      <Message owner value="👍" />
      <Message owner value="👍" />
    </section>
  )
}

export default MessageField
