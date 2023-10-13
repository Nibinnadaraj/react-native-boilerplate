import {
  createSlice,
  createAsyncThunk,
  AnyAction,
  Action,
} from '@reduxjs/toolkit';
import type {RootState} from '../store/store';

interface LoginState {
  isLoggedIn: boolean;
  isLoading?: boolean;
  accessToken: string;
  refreshToken: string;
  error?: string;
  successMessage: string;
}

const initialState: LoginState = {
  isLoggedIn: false,
  isLoading: false,
  accessToken: '',
  refreshToken: '',
  successMessage: '',
  error: '',
};

interface LoginTypes {
  params: object;
}

// interface RejectedAction extends Action {
//   error: Error;
// }

// function isRejectedAction(action: AnyAction): action is RejectedAction {
//   return action.type.endsWith('rejected');
// }

export const loginRequest = createAsyncThunk(
  'LOGIN_REQUEST',
  async ({params}: LoginTypes, thunkAPI: any) => {
    try {
      return true;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.response);
    }
  },
);

export const logoutRequest = createAsyncThunk(
  'LOGOUT_REQUEST',
  async ({params}: LoginTypes, thunkAPI: any) => {
    try {
      thunkAPI.dispatch(logout());
      return true;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.response);
    }
  },
);

export const loginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    logout: state => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.accessToken = '';
      state.refreshToken = '';
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.accessToken = '';
        state.refreshToken = '';
        state.error = '';
      })
      .addCase(loginRequest.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.accessToken = '';
        state.refreshToken = '';
        state.error = '';
      })
      .addCase(loginRequest.pending, state => {
        state.isLoggedIn = false;
        state.isLoading = true;
        state.accessToken = '';
        state.error = '';
      });
  },
});

export const {logout} = loginSlice.actions;

export const loginState = (state: RootState) => state.login;

export default loginSlice.reducer;
