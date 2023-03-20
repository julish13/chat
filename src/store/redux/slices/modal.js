/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: null,
  payload: {},
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state, action) {
      const { type, payload } = action.payload;
      state.type = type;
      state.payload = payload;
    },
    hideModal(state) {
      state.type = null;
      state.payload = {};
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
