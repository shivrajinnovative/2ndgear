import React from "react";

export default function PlantDetail({ equipment }) {
  return (
    <div className="plantDetail poppins table-responsive container-fluid">
      <div className="row px-sm-5">
          {
            Object.keys(equipment).map((key) => {
              let modifiedKey = key.split("_").join(" ").replace("indequip", "Equipment");
              if(modifiedKey!=="equipGallery" && equipment[key]!=="")
              return (
                <div className="col-sm-6 col-md-4 col-lg-3 py-5 border-bottom" key={key}>
                  <p className="fw-400">{modifiedKey}</p>
                  <p className="fw-500">{equipment[key].toString()}</p>
                </div>
              );
            })
          }
      </div>
    </div>
  );
}