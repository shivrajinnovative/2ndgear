import React from 'react'
import { useDynamicQuery } from '../../../utils/apiUtils'

export default function Affiliation() {
  const {data,error,isLoading}=useDynamicQuery(['affilation'],'get-affiliation-list')
  if(isLoading || error){
    return <></>
  }

  return (
    <div className='container pt-5'>
        <h1 className='text-center poppins  fw-500'>Affiliation</h1>
          <div className='row justify-content-center affilate py-5'>
            {
              data?.affiliationData.map((items,index)=>{
                return (
                  <div className='center col-md-6 my-2 col-lg-3' key={index}>
                    <img src={items.image} alt={items.name} className='img-fluid' />
                  </div>
                )
              })
            }
          </div>
    </div>
  )
}
