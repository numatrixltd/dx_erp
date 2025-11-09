// store/slices/environmentSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedEnvironment: 'sd', // default environment
  environments: [
    { 
      id: 'sd', 
      name: 'SD', 
      path: 'sd', 
      displayName: 'SEBL Distribution',
      logo: '/assets/All logo/Artboard 5.png' // or .svg
    },
    { 
      id: 'dxdl', 
      name: 'DXDL', 
      path: 'dxdl', 
      displayName: 'DX Distribution Limited',
      logo: '/assets/All logo/Artboard 2.png'
    },
    { 
      id: 'dxne', 
      name: 'DXNE', 
      path: 'dxne', 
      displayName: 'DX New Energy',
      logo: '/assets/All logo/Artboard 8.png'
    },
    { 
      id: 'dxhi', 
      name: 'DXHI', 
      path: 'dxhi', 
      displayName: 'DX HI-Tech',
      logo: '/assets/All logo/Artboard 1.png'
    },
    { 
      id: 'dxtl', 
      name: 'DTL-Multi', 
      path: 'dxtl', 
      displayName: 'DTL-Multi',
      logo: '/assets/All logo/Artboard 13.png'
    },
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