import React from "react";

export default function PlantDetail({ equipment }) {
  return (
    <div className="plantDetail poppins table-responsive container-fluid">
      <div className="row px-sm-5">
          {
            Object.keys(equipment).map((key) => {
              let modifiedKey = key
              .replace(/([a-z])([A-Z])/g, '$1 $2') 
              .split('_').join(' ') 
              .replace("indequip", "Equipment"); 
            if(equipment[key])
              return (
                <div className="col-sm-6 col-md-4 col-lg-3 py-3 py-md-5 border-bottom" key={key}>
                  <p className="fw-400 text-capitalize">{modifiedKey}</p>
                  <p className="fw-500">{equipment[key]}</p>
                </div>
              );
            })
          }
      </div>
    </div>
  );
}