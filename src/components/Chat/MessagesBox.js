/* eslint-disable react/jsx-props-no-spreading */
import { useRef, useEffect } from 'react';

const MessagesBox = ({ messages }) => {
  const messagesEndRef = useRef();

  const scrollToBottom = (behavior = 'auto') => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  useEffect(() => {
    scrollToBottom('smooth');
  }, [messages]);

  return (
    <div className="chat-messages overflow-auto px-5" id="messages-box">
      {messages.map(({ id, username, body }, index) => {
        const props = index === messages.length - 1 ? { ref: messagesEndRef } : {};
        return (
          <div className="text-break mb-2" key={id} {...props}>
            <b>{username}</b>: {body}
          </div>
        );
      })}
    </div>
  );
};

export default MessagesBox;
