// store/slices/environmentSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedEnvironment: 'sd', // default environment
  environments: [
    { id: 'sd', name: 'SD', path: 'sd', displayName: 'SEBL Distribution' },
    { id: 'dxdl', name: 'DXDL', path: 'dxdl', displayName: 'DX Distribution Limited' },
    { id: 'dxne', name: 'DXNE', path: 'dxne', displayName: 'DX New Energy' },
    { id: 'dxhi', name: 'DXHI', path: 'dxhi', displayName: 'DX HI-Tech' },
    // { id: 'dxweb', name: 'DXWEB', path: 'dxweb', displayName: 'DX Web Service' },
  ],
};

const environmentSlice = createSlice({
  name: 'environment',
  initialState,
  reducers: {
    setEnvironment: (state, action) => {
      state.selectedEnvironment = action.payload;
    },
    toggleEnvironment: (state) => {
      const currentIndex = state.environments.findIndex(
        (env) => env.id === state.selectedEnvironment
      );
      const nextIndex = (currentIndex + 1) % state.environments.length;
      state.selectedEnvironment = state.environments[nextIndex].id;
    },
  },
});

export const { setEnvironment, toggleEnvironment } = environmentSlice.actions;
export default environmentSlice.reducer;
