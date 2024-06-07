import React from 'react';
import './Breadcrumb.css';

export default function Breadcrumb({page, image}) {
  return (
    <div className='mt-5 pt-1'>
        <div className="breadcrumbb" style={{backgroundImage: `linear-gradient(90deg, #282366 0%, rgba(80, 70, 204, 0) 100%),url(${image})`}}>
            <p className='container poppins fw-400'>Home  <i className="bi bi-chevron-double-right"></i> <span>{page}</span> </p>
        </div>
    </div>
  );
}
