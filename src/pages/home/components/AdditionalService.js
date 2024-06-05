import React, { useState } from 'react'
import additionalService from './../assets/images/additionalService.png'

import plantDismentaling from './../assets/icons/additionalService/light/plantDismentaling.svg'
import plantDismentalingDark from './../assets/icons/additionalService/dark/plantDismentaling.svg'

import equipment from './../assets/icons/additionalService/light/equipment.svg'
import equipmentDark from './../assets/icons/additionalService/dark/equipment.svg'


import plant from './../assets/icons/additionalService/light/plant.svg'
import plantDark from './../assets/icons/additionalService/dark/plant.svg'

import inspection from './../assets/icons/additionalService/light/inspection.svg'
import inspectionDark from './../assets/icons/additionalService/dark/inspection.svg'

import operation from './../assets/icons/additionalService/light/operation.svg'
import operationDark from './../assets/icons/additionalService/dark/operation.svg'

import insurance from './../assets/icons/additionalService/light/insurance.svg'
import insuranceDark from './../assets/icons/additionalService/dark/insurance.svg'

import financial from './../assets/icons/additionalService/light/financial.svg'
import financialDark from './../assets/icons/additionalService/dark/financial.svg'

import rental from './../assets/icons/additionalService/light/rental.svg'
import rentalDark from './../assets/icons/additionalService/dark/rental.svg'

import ownership from './../assets/icons/additionalService/light/ownership.svg'
import ownershipDark from './../assets/icons/additionalService/dark/ownership.svg'



export default function AdditionalService() {
    const [hoverIndex,setHoverIndex]=useState(null)

    let content=[
        {
            title:"Plant Dismantling",
            image:plantDismentaling,
            imageDark:plantDismentalingDark
        },
        {
            title:"Refurbishment of Plant & Equipments",
            image:equipment,
            imageDark:equipmentDark
        },
        {
            title:"Plant Erection & Commissioning",
            image:plant,
            imageDark:plantDark
        },
        {
            title:"Inspection Reports",
            image:inspection,
            imageDark:inspectionDark
        },
        {
            title:"Operation & Maintenance",
            image:operation,
            imageDark:operationDark
        },
        {
            title:"Financial Assistance",
            image:financial,
            imageDark:financialDark
        },
        {
            title:"Insurance",
            image:insurance,
            imageDark:insuranceDark
        },
        {
            title:"Rental",
            image:rental,
            imageDark:rentalDark
        },
        {
            title:"Ownership Transfer etc",
            image:ownership,
            imageDark:ownershipDark
        }
    ]


    
  return (
    <div className='py-5 mt-5 bg-secondary'>
    <div className='container'>
        <div className="row">
            <div className="col-lg-4 p-3 center">
                <img className='img-fluid' src={additionalService} alt={additionalService} />
            </div>
            <div className="col-lg-8 pt-5 px-2">
                <h1 className='poppins fw-500'>Additional Service</h1>
                <div className="d-flex flex-wrap py-4">
               {
                content.map((item,index)=>{
                    return (
                        <div
                        key={index}
                        onMouseEnter={() => setHoverIndex(index)}
                           onMouseLeave={() => setHoverIndex(null)}
                        className={`serviceCard center flex-column p-2 ${
                            hoverIndex === index
                              ? "bg-primary text-white"
                              : "bg-white text-primary"
                          } `}>
                            <img 
                             src={hoverIndex === index ? item.image : item.imageDark}
                             alt={hoverIndex === index ? item.image : item.imageDark}
                             />
                            <p className='poppins text-center fw-400  my-3'>{item.title}</p>
                        </div>
                  
                    )
                })
               }
               </div>
            </div>
        </div>
    </div>
    </div>
  )
}
