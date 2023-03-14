/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state, action) {
      const { type } = action.payload;
      state.type = type;
    },
    hideModal(state) {
      state.type = null;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
