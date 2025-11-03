import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";

// Async thunk for fetching POS data from API
export const fetchPOSData = createAsyncThunk(
  "pos/fetchPOSData",
  async (env, { getState, rejectWithValue }) => {
    try {
      // Get selected environment from Redux state
      const environment = env || getState().environment.selectedEnvironment;

      // Call via proxy route with environment parameter
      // Remove environment from path - the proxy route handles it
      const response = await axios.get(
        `/api/proxy?path=businessDashBoard/retailSalesData&env=${environment}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || error.message);
    }
  }
);

const initialState = {
  data: [],
  loading: false,
  error: null,
  lastFetched: null,
};

const posSlice = createSlice({
  name: "pos",
  initialState,
  reducers: {
    updatePOSData: (state, action) => {
      state.data = action.payload;
    },
    updatePOSStat: (state, action) => {
      const { index, stat } = action.payload;
      if (state.data[index]) {
        state.data[index] = { ...state.data[index], ...stat };
      }
    },
    resetPOSData: (state) => {
      state.data = initialState.data;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPOSData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPOSData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.lastFetched = new Date().toISOString();
        state.error = null;
      })
      .addCase(fetchPOSData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { updatePOSData, updatePOSStat, resetPOSData, clearError } =
  posSlice.actions;
export default posSlice.reducer;
