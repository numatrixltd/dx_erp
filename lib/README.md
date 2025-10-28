# Redux Setup for ERP Dashboard

This project uses Redux Toolkit for state management with a comprehensive state management system.

## Structure

```
lib/
├── store.js                    # Redux store configuration
├── provider.js                 # Redux Provider wrapper for Next.js
├── hooks.js                    # Typed Redux hooks (useAppDispatch, useAppSelector)
├── features/
│   ├── ui/
│   │   └── uiSlice.js          # UI state (sidebar, mobile, sections)
│   ├── dashboard/
│   │   └── dashboardSlice.js   # Dashboard configuration state
│   └── sales/
│       ├── primarySalesSlice.js # Primary Sales data with async thunk
│       └── posSlice.js         # POS data management
└── README.md                   # This file
```

## Available State Slices

### 1. UI State (`state.ui`)
Manages UI-related state:
- `sidebarOpen` - Sidebar visibility
- `activeSection` - Currently active dashboard section
- `dashboardDropdownOpen` - Dashboard dropdown state
- `isMobile` - Mobile screen detection

**Actions:**
- `setSidebarOpen(boolean)`
- `toggleSidebar()`
- `setActiveSection(section)`
- `toggleDashboardDropdown()`
- `setIsMobile(boolean)`

### 2. Dashboard State (`state.dashboard`)
Manages dashboard configuration:
- `selectedDashboard` - Active dashboard type
- `activeTab` - Active tab within dashboard
- `filters` - Date range and entity filters
- `data` - Dashboard data
- `loading` - Loading state
- `error` - Error messages

**Actions:**
- `setSelectedDashboard(type)`
- `setActiveTab(tab)`
- `setDateRange(range)`
- `setEntities(entities)`
- `clearFilters()`

### 3. Primary Sales (`state.primarySales`)
Manages primary sales data with async fetching:

**State:**
- `data` - Sales data array
- `loading` - Loading state
- `error` - Error message
- `lastFetched` - Timestamp of last fetch

**Async Thunk:**
- `fetchPrimarySales()` - Fetches data from API

**Actions:**
- `clearError()`
- `resetPrimarySales()`

### 4. POS State (`state.pos`)
Manages POS data:
- `data` - Array of POS statistics

**Actions:**
- `updatePOSData(data)`
- `updatePOSStat({index, stat})`
- `resetPOSData()`

## Usage Examples

### Example 1: Using UI State

```jsx
'use client';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setSidebarOpen, setActiveSection } from '@/lib/features/ui/uiSlice';

export default function MyComponent() {
  const dispatch = useAppDispatch();
  const { sidebarOpen, activeSection } = useAppSelector((state) => state.ui);

  return (
    <div>
      <p>Sidebar: {sidebarOpen ? 'Open' : 'Closed'}</p>
      <p>Active Section: {activeSection}</p>
      <button onClick={() => dispatch(setSidebarOpen(true))}>
        Open Sidebar
      </button>
    </div>
  );
}
```

### Example 2: Fetching Async Data (Primary Sales)

```jsx
'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchPrimarySales } from '@/lib/features/sales/primarySalesSlice';

export default function SalesComponent() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.primarySales);

  useEffect(() => {
    dispatch(fetchPrimarySales());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{item.title}: {item.value}</div>
      ))}
    </div>
  );
}
```

### Example 3: Using POS Data

```jsx
'use client';
import { useAppSelector } from '@/lib/hooks';
import { updatePOSData } from '@/lib/features/sales/posSlice';

export default function POSComponent() {
  const dispatch = useAppDispatch();
  const posData = useAppSelector((state) => state.pos.data);

  return (
    <div>
      {posData.map((stat, index) => (
        <div key={index}>
          <h3>{stat.title}</h3>
          <p>{stat.value}</p>
          <p>Change: {stat.change}</p>
        </div>
      ))}
    </div>
  );
}
```

## Adding New Slices

To add a new slice:

1. Create a new file in `lib/features/[feature]/[feature]Slice.js`:

```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk (optional)
export const fetchData = createAsyncThunk(
  'feature/fetchData',
  async () => {
    const response = await fetch('/api/data');
    return response.json();
  }
);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const featureSlice = createSlice({
  name: 'feature',
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { updateData } = featureSlice.actions;
export default featureSlice.reducer;
```

2. Import and add to the store in `lib/store.js`:

```javascript
import featureReducer from './features/feature/featureSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      ui: uiReducer,
      dashboard: dashboardReducer,
      primarySales: primarySalesReducer,
      pos: posReducer,
      feature: featureReducer, // Add your new slice
    },
  });
};
```

## Implementation Details

### Components Using Redux

1. **DashboardContainer** - Uses Redux for UI state management
2. **PrimarySales** - Uses Redux for data fetching and state management

### Data Flow

```
Component → dispatch(action) → Redux Store → Reducer → New State → Component Re-renders
```

### Best Practices

1. **Always use typed hooks**: Import from `@/lib/hooks` for `useAppDispatch` and `useAppSelector`
2. **Keep components thin**: Move business logic to Redux thunks
3. **Use selectors**: Create memoized selectors for complex state derivations
4. **Handle errors**: Always handle loading and error states in components
5. **Avoid prop drilling**: Use Redux for shared state across components

## State Flow Examples

### Current Implementation
- ✅ Dashboard UI state (sidebar, sections, mobile)
- ✅ Primary Sales async data fetching
- ✅ POS data management
- ✅ Dashboard configuration

### Extensibility
The structure is designed to easily add:
- More API endpoints with async thunks
- More UI state management
- Complex data transformations
- Real-time updates
- Persistent state (localStorage integration)
