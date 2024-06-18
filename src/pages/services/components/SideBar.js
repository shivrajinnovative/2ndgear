import React from 'react'
import { Link } from 'react-router-dom'
import AgentForm from './AgentForm'

export default function SideBar({services,active}) {
  return (
    <div>
        <div className="card p-4">
                {
                    Object.keys(services).map(key=>{
                        return (
                            <Link key={key} to={`/services/${key}`} className={`nav-link py-2 ${active===key?'text-primary fw-600':'fw-500'}`} > <i className="bi bi-arrow-right mx-2"></i> {services[key].heading}</Link>
                        )
                    })
                }
        </div>
        <div className="card my-5 p-3 px-4">
            <h3 className='text-primary text-center '>Service Enquiry Form</h3>
            <AgentForm/>
        </div>
    </div>
  )
}
