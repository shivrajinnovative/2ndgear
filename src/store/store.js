import { configureStore } from '@reduxjs/toolkit'
import equipmentSlice from './slices/equipmentSlice'

export const store = configureStore({
  reducer: {
    equipments:equipmentSlice
  },
})
