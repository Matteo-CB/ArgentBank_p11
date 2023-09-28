import { createSlice } from '@reduxjs/toolkit'

export interface IsConnectedState {
  value: boolean
}

const initialState: IsConnectedState = {
  value: false,
}

export const isConnectedSlice = createSlice({
  name: 'isConnected',
  initialState,
  reducers: {
    toggleIsConnected: (state) => {
      state.value = !state.value;
  },
  }
})

export const { toggleIsConnected } = isConnectedSlice.actions

export default isConnectedSlice.reducer