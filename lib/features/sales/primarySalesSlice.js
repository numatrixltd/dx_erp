import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/lib/axios';

// Async thunk for fetching primary sales data
export const fetchPrimarySales = createAsyncThunk(
  'sales/fetchPrimarySales',
  async (env, { getState, rejectWithValue }) => {
    try {
      // Get selected environment from Redux state
      const environment = env || getState().environment.selectedEnvironment;
      
      // Call via proxy route with environment parameter
      // Don't include environment in the path - the proxy route handles it
      const response = await axios.get(`/api/proxy?path=businessDashBoard/primarySalesData&env=${environment}`);
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

const primarySalesSlice = createSlice({
  name: 'primarySales',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    resetPrimarySales: (state) => {
      state.data = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrimarySales.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPrimarySales.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.lastFetched = new Date().toISOString();
        state.error = null;
      })
      .addCase(fetchPrimarySales.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, resetPrimarySales } = primarySalesSlice.actions;
export default primarySalesSlice.reducer;