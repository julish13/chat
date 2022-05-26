import routes from '@src/routes.js';
import { chatActions } from './chat-slice.js';

export const fetchChatData = (token) => {
  const url = routes.dataPath();
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Could not fetch data');
      }

      const data = await response.json();

      return data;
    };

    try {
      const chatData = await fetchData();
      dispatch(
        chatActions.replaceData({
          channels: chatData.channels || [],
          messages: chatData.messages || [],
          currentChannelId: chatData.currentChannelId || null,
        })
      );
    } catch (error) {
      console.error(error.message);
    }
  };
};
