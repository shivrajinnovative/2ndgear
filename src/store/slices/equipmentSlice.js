import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apiData: [],
  filteredData: [],
  statesForFilter: [],
  priceForFilter: [],
  yearForFilter: [],
  categoryForFilter:"",
  categoryList:[],
  subCategoryForFilter:'',
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
      state.statesForFilter= []
      state.yearForFilter=[]
      state.categoryList=[]
      equipmentSlice.caseReducers.applyFilter(state);
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
      state.categoryList=[]
      state.categoryForFilter=action.payload 
      equipmentSlice.caseReducers.applyFilter(state); 
    },
    setCategoryListForFilter:(state,action)=>{
      state.categoryList=action.payload 
      state.categoryForFilter='' 
      state.subCategoryForFilter='' 
      equipmentSlice.caseReducers.applyFilter(state); 
    },
    setSubCategoryForFilter:(state,action)=>{
      state.categoryList=[]
      state.subCategoryForFilter=action.payload 
      equipmentSlice.caseReducers.applyFilter(state); 
    },
    applyFilter: (state) => {
      const { priceForFilter, yearForFilter ,statesForFilter,categoryForFilter,categoryList,subCategoryForFilter,mainCategory } = state;
      const [low, high] = priceForFilter;
      state.filteredData = state.apiData.filter((product) => {
      const matchPrice =priceForFilter.length>0?
          product.indequip_price >= low && product.indequip_price <= high :true;
      const matchYear =
          yearForFilter.length > 0
            ? yearForFilter.includes(Number(product.indequip_yom))
            : true;
      const matchState=statesForFilter.length>0?statesForFilter.includes(product.currentState):true
      const catList=categoryList.length>0?categoryList.includes(product.sub_equip_cat_slug):true
      const subCategory=subCategoryForFilter?subCategoryForFilter===product.sub_equip_cat_slug:true
      const matchCategory=categoryForFilter?categoryForFilter===product.equip_cat_slug:true
      const mainCat=product.indequip_upfor===mainCategory || product.indequip_upfor==='sell/rent'
      return matchPrice && matchYear && matchState && matchCategory && mainCat && subCategory && catList;
      });   
    },
  },
});
export const { setApiData, resetFilter, setYearForFilter, setPriceForFilter,setStateForFilter,setCategoryForFilter,setCategoryListForFilter,setSubCategoryForFilter,setMainCategory } =
  equipmentSlice.actions;
export default equipmentSlice.reducer;
