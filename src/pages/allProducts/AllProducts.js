import React, { useEffect, useState } from "react";
import "./assets/AllProducts.css";
import location from "../../assets/icons/location.svg";
import refresh from "./assets/icons/refresh.svg";
import { useDynamicQuery } from "../../utils/apiUtils";
import SideBar from "./component/SideBar";
import { Link, Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setApiData, setCategoryForFilter } from "../../store/slices/equipmentSlice";

export default function AllProducts({type}) {
  const {category, subcategory } = useParams();
  const [totalProducts,setTotalProducts]=useState(null)
  const dispatch=useDispatch()
  
  const {data,error,isLoading}=useDynamicQuery(['get-equip-list'],'get-equip-list')
  const productData=useSelector((state)=>state.equipments.filteredData)
  
  
  useEffect(()=>{
    if(data){
      dispatch(setApiData(data.productList))
      setTotalProducts(data.productList && data.productList.length)
    }
  },[data,dispatch])
  
  useEffect(()=>{
    if(category){
      dispatch(setCategoryForFilter([category]))
    }
  },[category,dispatch])
  
  if (type !== 'buy' && type !== 'rent') {
    return <Navigate to="/" />;
  }
  
  if(!productData){
   return <>
   <div className="container pt-5 mt-5">
   <h1>Products not found...</h1>
   </div>
   </>
  }

  return (
    <section className="bg-secondary pt-5 mt-5">
      <div className="container pt-3 ">
        <h1 className="poppins py-3 fw-300">
          Plants <span className="text-primary fw-700">({totalProducts})</span>
        </h1>

        <div className="row">
          <div className="col-lg-3">
            <SideBar category={category}  subcategory={subcategory} />
          </div>
          <div className="col-lg-9">
            <div className="howWorks col-md-5 mx-auto my-5 m-lg-0 text-center py-4 text-white">
              <h4 className="poppins fw-600">How Secondgear® Works?</h4>
              <hr className="mx-5" />
              <p>
                You won’t just Love our Plants, <br /> you’ll Love the way you
                Buy them.
              </p>
            </div>
            <div className="d-flex justify-content-between bg-white my-3 p-3 rounded-3">
              <h4 className="poppins fw-400">All Plants</h4>
              <select className="poppins fw-400 px-2">
                <option value="">Sort By: </option>
                <option value="">hight to low </option>
                <option value=""> low to height </option>
              </select>
            </div>
            <div className="productsListing">
              <div className="row">
                {productData?.map((product, index) => {
                  return (
                    <div className="col-md-6 col-lg-4 mb-3" key={index}>
                      <Link
                        className="card p-3 rounded-4"
                        to={`/equipment-details/${product.indequip_slug}`}
                      >
                        <img src={product.productImage} alt={product.indequip_brand} height='200px' />
                        <h5 className="poppins fw-500 mt-3">
                          {product.indequip_brand}
                        </h5>
                        <div
                          className="d-flex justify-content-between py-1"
                          style={{ fontSize: "17px" }}
                        >
                          <span>{product.indequip_model}</span>
                          <span>{product.indequip_yom}</span>
                        </div>
                        <p className="poppins fw-400 border-top border-bottom">
                          Concrete Batching Plant | Schwing Stetter
                        </p>

                        <p className="m-0 poppins fw-400">
                          <img src={location} alt={location} />{" "}
                          {product.currentCity},{product.currentState}
                        </p>
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="center my-5">
                <button className="btn bg-primary rounded-pill text-white px-4 poppins fw-400">
                
                  <img src={refresh} alt={refresh} /> Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
