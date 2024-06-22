import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apiData: [],
  filteredData: [],
  statesForFilter: [],
  priceForFilter: [],
  yearForFilter: [],
  categoryForFilter:[],
  subCategoryForFilter:[],
  mainCategory:""
};

const equipmentSlice = createSlice({
  name: "equipment",
  initialState,
  reducers: {
    setApiData: (state, action) => {
      state.apiData = action.payload;
      state.filteredData = action.payload;
    },
    setMainCategory:(state,action)=>{
      state.mainCategory=action.payload
      equipmentSlice.caseReducers.applyFilter(state);
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
    setCategoryForFilter:(state,action)=>{
        state.categoryForFilter=action.payload 
        equipmentSlice.caseReducers.applyFilter(state); 
    },
    applyFilter: (state) => {
      const { priceForFilter, yearForFilter ,statesForFilter,categoryForFilter,mainCategory } = state;
      const [low, high] = priceForFilter;
      state.filteredData = state.apiData.filter((product) => {
        const matchPrice =priceForFilter.length>0?
          product.indequip_price >= low && product.indequip_price <= high :true;
        const matchYear =
          yearForFilter.length > 0
            ? yearForFilter.includes(Number(product.indequip_yom))
            : true;
        const matchState=statesForFilter.length>0?statesForFilter.includes(product.currentState):true
        
        const matchCategory=categoryForFilter.length>0?categoryForFilter.includes(product.equip_cat_slug):true
        const mainCat=product.indequip_upfor===mainCategory
        return matchPrice && matchYear && matchState && matchCategory && mainCat;
      });   
    },
  },
});
export const { setApiData, resetFilter, setYearForFilter, setPriceForFilter,setStateForFilter,setCategoryForFilter,setMainCategory } =
  equipmentSlice.actions;
export default equipmentSlice.reducer;
