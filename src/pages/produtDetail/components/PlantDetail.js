import React from "react";
import { useSelector } from "react-redux";

export default function PlantDetail({ equipment }) {
  const isLogin = useSelector((state) => state.login);
  return (
    <div className="plantDetail poppins table-responsive container-fluid">
      <div className="row px-sm-5">
          {
            Object.keys(equipment).map((key) => {
              let modifiedKey = key
              .replace(/([a-z])([A-Z])/g, '$1 $2') 
              .split('_').join(' ') 
              .replace("indequip", "Equipment"); 

            if(key==='indequip_price' && !isLogin){
              return null;
            }
            if(equipment[key]){
              return (
                <div className="col-sm-6 col-md-4 col-lg-3 py-3 py-md-5 border-bottom" key={key}>
                  <p className="fw-400 text-capitalize">{modifiedKey}</p>
                  <p className="fw-500" dangerouslySetInnerHTML={{ __html: equipment[key] }} ></p>
                </div>
              );
            }
            })
          }
      </div>
    </div>
  );
}