import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDashboardData } from './services/dashboardAPI';

interface DashboardState {
  stats: string[];
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  stats: [],
  loading: false,
  error: null,
};

// Async thunk to fetch dashboard stats
export const getDashboardStats = createAsyncThunk(
  'dashboard/fetchStats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchDashboardData();
      return response.stats;
    } catch (err) {
      return rejectWithValue('Failed to load dashboard data');
    }
  }
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDashboardStats.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDashboardStats.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload;
      })
      .addCase(getDashboardStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default dashboardSlice.reducer;
