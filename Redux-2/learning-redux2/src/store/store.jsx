import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '../reducers/UserReducer.jsx'

export const store = configureStore({
  reducer: {
    UserReducer: UserReducer
  },
})