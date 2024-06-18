import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apiData: [],
  filteredData: [],
  statesForFilter: [],
  priceForFilter: [],
  yearForFilter: [],
  statesForFilter:[]
};

const equipmentSlice = createSlice({
  name: "equipment",
  initialState,
  reducers: {
    setApiData: (state, action) => {
      state.apiData = action.payload;
      state.filteredData = action.payload;
    },
    resetFilter: (state) => {
      state.filteredData = [...state.apiData];
    },
    setYearForFilter: (state, action) => {
      state.yearForFilter = action.payload;
      equipmentSlice.caseReducers.applyFilter(state);
    },
    setPriceForFilter: (state, action) => {
      state.priceForFilter = action.payload;
      equipmentSlice.caseReducers.applyFilter(state);
    },
    setStateForFilter:(state,action)=>{
        state.statesForFilter=action.payload 
        equipmentSlice.caseReducers.applyFilter(state);
    },
    applyFilter: (state) => {
      const { priceForFilter, yearForFilter ,statesForFilter } = state;
      const [low, high] = priceForFilter;
      state.filteredData = state.apiData.filter((product) => {
        const matchPrice =
          product.indequip_price >= low && product.indequip_price <= high;
        const matchYear =
          yearForFilter.length > 0
            ? yearForFilter.includes(Number(product.indequip_yom))
            : true;
        const matchState=statesForFilter.length>0?statesForFilter.includes(product.currentState):true
        return matchPrice && matchYear && matchState;
      });   
    },
  },
});
export const { setApiData, resetFilter, setYearForFilter, setPriceForFilter } =
  equipmentSlice.actions;
export default equipmentSlice.reducer;
