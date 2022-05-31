const MessagesBox = ({ messages }) => {
  return (
    <div className="chat-messages overflow-auto px-5" id="messages-box">
      {messages.map(({ id, username, body }) => (
        <div className="text-break mb-2" key={id}>
          <b>{username}</b>: {body}
        </div>
      ))}
    </div>
  );
};

export default MessagesBox;
