import React from 'react'
import './productDetail.css'
import Product from './components/Product'
import EnquiryForm from './components/EnquiryForm'
import PlantDetail from './components/PlantDetail'
import InspectionReports from './components/InspectionReports'
import RelatedEquipments from './components/RelatedEquipments'
export default function ProductDetail() {
  return (
    <section className='bg-light pt-5'>
        <div className="container pt-5">
            <div className="row pt-5">
                <div className="col-md-6">
                    <Product/>
                </div>
                <div className="col-md-6">
                    <EnquiryForm/>
                </div>
                <div>
                    <PlantDetail/>
                    <InspectionReports/>
                </div>
                <div>
                    <RelatedEquipments/>
                </div>
            </div>
        </div>
    </section>
  )
}
