import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '../reducers/UserReducer.jsx'
import ProductReducer from '../reducers/ProductReducer.jsx'

export const store = configureStore({
  reducer: {
    UserReducer: UserReducer,
    ProductReducer: ProductReducer
  },
})