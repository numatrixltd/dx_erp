import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './features/ui/uiSlice';
import dashboardReducer from './features/dashboard/dashboardSlice';
import environmentReducer from './features/environment/environmentSlice';
import primarySalesReducer from './features/sales/primarySalesSlice';
import posReducer from './features/sales/posSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      ui: uiReducer,
      dashboard: dashboardReducer,
      environment: environmentReducer,
      primarySales: primarySalesReducer,
      pos: posReducer,
    },
  });
};
