/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import routes from '@src/routes.js';

const dataUrl = routes.dataPath();

const fetchChatData = createAsyncThunk('users/fetchChatData', async (token) => {
  const response = await fetch(dataUrl, {
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
});

const initialState = {
  channels: [],
  messages: [],
  currentChannelId: null,
  isLoading: false,
  error: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage(state, action) {
      const message = action.payload;
      state.messages.push(message);
    },
    setCurrentChannel(state, action) {
      state.currentChannelId = action.payload;
    },
    addChannel(state, action) {
      const channel = action.payload;
      state.channels.push(channel);
      state.currentChannelId = channel.id;
    },
    removeChannel(state, action) {
      const id = action.payload;
      state.channels = state.channels.filter(({ id: channelId }) => channelId !== id);
      state.messages = state.messages.filter(({ channelId }) => channelId !== id);
      if (state.currentChannelId === id) {
        state.currentChannelId = state.channels[0].id;
      }
    },
    renameChannel(state, action) {
      const { id, name } = action.payload;
      const index = state.channels.findIndex(({ id: channelId }) => id === channelId);
      state.channels[index].name = name;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChatData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchChatData.fulfilled, (state, action) => {
        const { channels, messages, currentChannelId } = action.payload;
        state.channels = channels;
        state.messages = messages;
        state.currentChannelId = currentChannelId;
        state.isLoading = false;
      })
      .addCase(fetchChatData.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      });
  },
});

export const chatActions = { ...chatSlice.actions, fetchChatData };
export default chatSlice.reducer;
