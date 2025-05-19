import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Role = 'admin' | 'editor' | 'viewer'

interface User {
  email: string;
  role: Role;
  password: string;
}

interface UsersState {
  users: User[];
  currentUser: User | null;
}

const initialState: UsersState = {
  users: [{
    email: 'test@gmail.com',
    role: 'admin',
    password: '123',
  }],
  currentUser: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    setCurrentUser(state, action: PayloadAction<User | null>) {
      state.currentUser = action.payload;
    },
    logout(state) {
      state.currentUser = null;
    }
  },
});

export const { addUser, setCurrentUser, logout } = usersSlice.actions
export default usersSlice.reducer
