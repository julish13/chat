import React, { useRef, useEffect, useMemo, useState } from 'react';

const MessagesBox = ({ messages }) => {
  const [hasToScroll, setHasToScroll] = useState(true);
  const messagesBoxRef = useRef();

  useEffect(() => {
    if (hasToScroll) {
      messagesBoxRef.current.scrollTop = messagesBoxRef.current.scrollHeight;
      setHasToScroll(false);
    }
  }, [hasToScroll]);

  useMemo(() => {
    if (messagesBoxRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = messagesBoxRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setHasToScroll(true);
      }
    }
  }, [messages]);

  return (
    <div className="chat-messages overflow-auto px-5" id="messages-box" ref={messagesBoxRef}>
      {messages.map(({ id, username, body }) => {
        return (
          <div className="text-break mb-2" key={id}>
            <b>{username}</b>: {body}
          </div>
        );
      })}
    </div>
  );
};

export default MessagesBox;
