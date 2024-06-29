import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    loading: false,
    error: null,
    avatar:null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      signInStart: (state) => {
        console.log('signInStart:', current(state));
        state.currentUser = null;
        state.loading = true;
        state.error = null;
        state.avatar = null;
      },
      signInSuccess: (state, action) => {
        console.log('signInSuccess (before):', current(state));
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
        state.avatar = null;
        console.log('signInSuccess (after):', current(state));
      },
      signInFailure: (state, action) => {
        console.log('signInFailure:', current(state));
        state.currentUser = null;
        state.loading = false;
        state.error = action.payload;
        state.avatar = null;
      },
      signOut: (state) => {
        console.log('signOut:', current(state));
        state.currentUser = null;
        state.loading = false;
        state.error = null;
        state.avatar = null;
      },
    },
  });
  

export const {signInFailure, signInStart, signInSuccess, signOut} = userSlice.actions
export default userSlice.reducer
  