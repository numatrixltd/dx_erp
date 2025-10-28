import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarOpen: false, // Closed by default for mobile-first
  activeSection: 'Business Dashboard',
  dashboardDropdownOpen: true,
  isMobile: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    setDashboardDropdownOpen: (state, action) => {
      state.dashboardDropdownOpen = action.payload;
    },
    toggleDashboardDropdown: (state) => {
      state.dashboardDropdownOpen = !state.dashboardDropdownOpen;
    },
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const {
  setSidebarOpen,
  toggleSidebar,
  setActiveSection,
  setDashboardDropdownOpen,
  toggleDashboardDropdown,
  setIsMobile,
} = uiSlice.actions;

export default uiSlice.reducer;
