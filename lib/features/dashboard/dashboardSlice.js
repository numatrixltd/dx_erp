import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDashboard: 'business',
  activeTab: null,
  filters: {
    dateRange: '2025-01-01 - 2025-09-28',
    entities: [],
  },
  data: null,
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setSelectedDashboard: (state, action) => {
      state.selectedDashboard = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setDateRange: (state, action) => {
      state.filters.dateRange = action.payload;
    },
    setEntities: (state, action) => {
      state.filters.entities = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const {
  setSelectedDashboard,
  setActiveTab,
  setDateRange,
  setEntities,
  setLoading,
  setError,
  clearFilters,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
