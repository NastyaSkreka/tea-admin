import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userSlice } from './user/user.slice';


const rootReducer = combineReducers({
  user: userSlice.reducer,

});

export const store = configureStore({
  reducer: rootReducer,

});

setupListeners(store.dispatch);
export type TypeRootState = ReturnType<typeof rootReducer>;