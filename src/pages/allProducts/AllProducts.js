import React, { useEffect, useState } from "react";
import "./assets/AllProducts.css";
import locationIcon from "../../assets/icons/location.svg";
import refresh from "./assets/icons/refresh.svg";
import { useDynamicQuery } from "../../utils/apiUtils";
import SideBar from "./component/SideBar";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setApiData, setCategoryForFilter, setMainCategory, setSubCategoryForFilter } from "../../store/slices/equipmentSlice";

export default function AllProducts(props) {
  const location = useLocation();
  const { stateName } = location.state || {}; 
  const {category, subcategory } = useParams();

  const dispatch=useDispatch()
  const [type,setType]=useState(props.type)
  const navigate = useNavigate();
  const [showFilter,setShowFilter]=useState(false)
  const {data,error,isLoading}=useDynamicQuery(['get-equip-list'],'get-equip-list')
  const productData=useSelector((state)=>state.equipments.filteredData)
  const isLogin = useSelector((state) => state.login);

  // const allFilter=useSelector((state)=>state.equipments)
  useEffect(()=>{
    if(window.innerWidth <= 768 ){
        setShowFilter(false)
    }
  },[])
  useEffect(()=>{
    if(data){
      dispatch(setApiData(data.productList))
      if(props.type){
        dispatch(setMainCategory(props.type))
      }
    }
  },[data])

  
  useEffect(()=>{
    if(productData){
      if(props.type){
        dispatch(setMainCategory(props.type))
      }
      if(category){
        dispatch(setCategoryForFilter(category))
      }else{
        dispatch(setCategoryForFilter(''))
      }
      if(subcategory){
        dispatch(setSubCategoryForFilter(subcategory))
      }else{
        dispatch(setSubCategoryForFilter(''))
      }
    }
    },[props.type,category,subcategory])
    
  
 
  if(!productData){
   return <>
   <div className="container pt-5 mt-5">
   <h1>Products not found...</h1>
   </div>
   </>
  }

  // console.log(productData)
  return (
    <section className="bg-secondary pt-md-5 mt-5">
      <div className="container pt-3 ">
        <h1 className="assetHeading py-3  bg-secondary-dark my-2 fw-300 justify-content-between px-3 d-flex">
        <span>  Assets <span className="text-primary fw-700">({productData.length})</span></span>
          <i className="bi bi-funnel-fill d-md-none text-primary" onClick={()=>{setShowFilter(!showFilter)}}></i>
        </h1>
        <div className="row">
          <div className="col-lg-3 overflow-hidden position-relative ">
            <SideBar category={category} setShowFilter={setShowFilter} showFilter={showFilter} subcategory={subcategory} defaultState={stateName} />
          </div>
          <div className="col-lg-9 ">
            <div className="howWorks d-none d-lg-block col-md-5 mx-auto my-5 m-lg-0 text-center py-4 text-white">
              <h4 className="poppins fw-600">How Secondgear® Works?</h4>
              <hr className="mx-5" />
              <p>
                You won’t just Love our Plants, <br /> you’ll Love the way you
                Buy them.
              </p>
            </div>
            <div className="d-none d-md-flex justify-content-between bg-white my-3 p-3 rounded-3">
              <h4 className="poppins fw-400">All Assets</h4>
              {
                isLogin &&   <select className="poppins fw-400 px-2">
                <option value="">Sort By: </option>
                <option value="">hight to low </option>
                <option value=""> low to height </option>
              </select> 
              }
            </div>
            <div className="productsListing  mt-5 pt-5 p-md-0 m-md-0">
              <div className="row ">
              
              {

                productData?.length>0? productData.map((product, index) => {
                  return (
                    <div className="col-md-6 col-lg-4 mb-3" key={index}>
                      <Link
                        className="card productlistCard p-3 rounded-4"
                        to={`/equipment-details/${product.indequip_slug}`}
                      >
                        <img src={product.productImage} alt={product.indequip_brand}  height='200px' />
                       <div className="px-2 px-md-0">
                       <h5 className="poppins fw-500 mt-md-3">
                          {product.indequip_brand}
                        </h5>
                        <div
                          className="d-flex justify-content-between py-md-1"
                        >
                          <span>{product.indequip_model}</span>
                          <span>{product.indequip_yom}</span>
                        </div>
                        <p className="poppins fw-400 border-top border-bottom">
                         {product.sub_equip_cat_name}
                        </p>

                        <p className="m-0 poppins fw-400">
                          <img src={locationIcon} alt={locationIcon} />{" "}
                          {product.currentCity},{product.currentState}
                        </p>
                       </div>
                      </Link>
                    </div>
                  );
                }):(
                  <div className=" p-5 col-12 text-center">
                    <h3 className="mb-5">No Products Available !!!</h3>
                  </div>
                )
              }



               
              </div>
              {/* <div className="center my-5">
                <button className="btn bg-primary rounded-pill text-white px-4 poppins fw-400">
                
                  <img src={refresh} alt={refresh} /> Load More
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
