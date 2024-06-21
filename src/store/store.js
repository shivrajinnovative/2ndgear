import { configureStore } from '@reduxjs/toolkit'
import equipmentSlice from './slices/equipmentSlice'
import authSlice from './slices/authSlice'
import registerSlice from './slices/registerSlice'

export const store = configureStore({
  reducer: {
    equipments:equipmentSlice,
    login:authSlice,
    register:registerSlice
  },
})
