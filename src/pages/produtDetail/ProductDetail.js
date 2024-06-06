import React, { useEffect, useState } from 'react'
import './productDetail.css'
import Product from './components/Product'
import EnquiryForm from './components/EnquiryForm'
import PlantDetail from './components/PlantDetail'
import InspectionReports from './components/InspectionReports'
import RelatedEquipments from './components/RelatedEquipments'
export default function ProductDetail() {

    const [click,setClick]=useState(1)
const handelClick=()=>{
    alert("clickk")
}
    useEffect(()=>{},[click])
  return (
    <section className='bg-light pt-5 produtDetail'>
        <div className="container pt-5">
            <div className="row pt-5">
                <div className="col-md-7">
                    <Product/>
                </div>
                <div className="col-md-5">
                    <EnquiryForm/>
                </div>
                <div className='mt-5'>
                    <div className="card rounded-4">
                        <div className='poppins fw-500 m-3 d-flex border-bottom '>
                              <div className="position-relative">
                            <span type='button' className={`p-3 ${click===1?"text-primary active":"text-secondary"} `} onClick={()=>setClick(1)}  >Plants Detail's</span>
                            </div>
                               <div className="position-relative">
                            <span type='button' className={`p-3 ${click===2?"text-primary active":"text-secondary"} `} onClick={()=>setClick(2)}  >Inspection Report’s</span>
                            </div>
                        
                        </div>
                   {
                    click===1?<PlantDetail/>:<InspectionReports/>
                   }
                    </div>
                </div>
                <div>
                    <RelatedEquipments/>
                </div>
            </div>
        </div>
    </section>
  )
}
