import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    filteredData: []
  },
  reducers: {
    addAllProducts: (state, action) => {
      state.data = action.payload;
      state.filteredData = action.payload;
    },
    filterByYear: (state, action) => {
      const selectedYears = action.payload;
      if (selectedYears && selectedYears.length > 0) {
        const filteredProducts = state.data.filter(product => 
          selectedYears.includes(Number(product.indequip_yom))
        );
        state.filteredData = filteredProducts;
      } else {
        state.filteredData = state.data;
      }
    },
    filterByPrice: (state, action) => {
      const [low, high] = action.payload;
      const filteredProducts = state.data.filter(product =>
        product.indequip_price >= low && product.indequip_price <= high
      );
      state.filteredData = filteredProducts;
    }
  }
});

export const { addAllProducts, filterByYear, filterByPrice } = productSlice.actions;

export default productSlice.reducer;
