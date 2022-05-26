import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AuthContext from '@store/context/auth-context.js';
import { fetchChatData } from '@store/slices/chat-actions.js';

const Chat = () => {
  const { token } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChatData(token));
  }, [dispatch]);

  return <div> chat </div>;
};

export default Chat;
