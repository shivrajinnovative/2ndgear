import axios from 'axios'
import React from 'react'

export default function TestingComponent() {
  
        


    const handelSubmit=async()=>{
        const {data}=await axios.post('http://2gear.in/staging/api/submit-equip-enquiry-form')
        console.log(data)

    }
  
    return (
    <div>TestingComponent

    <button onClick={handelSubmit}>clickkkkkk </button>

    </div>
  )
}
