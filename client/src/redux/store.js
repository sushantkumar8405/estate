import {combineReducers, configureStore } from '@reduxjs/toolkit'
// import { buildGetDefaultEnhancers } from '@reduxjs/toolkit/dist/getDefaultEnhancers'
// import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'
import  useReducer  from './user/userSlice';
import { composeWithDevTools } from 'redux-devtools-extension';
export const store = configureStore({
  reducer: {user:useReducer},
  middleware: (buildGetDefaultMiddleware) =>buildGetDefaultMiddleware({
    serializableCheck:false,
  }),
})


