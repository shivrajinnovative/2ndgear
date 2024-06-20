import { configureStore } from '@reduxjs/toolkit'
import equipmentSlice from './slices/equipmentSlice'
import authSlice from './slices/authSlice'

export const store = configureStore({
  reducer: {
    equipments:equipmentSlice,
    login:authSlice
  },
})
