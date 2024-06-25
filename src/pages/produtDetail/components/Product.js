import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./../productDetail.css";
import { useSelector } from "react-redux";
import { Image } from "antd";

export default function Product({
  equipGallery,
  indequip_brand,
  price,
}) {
  const isLogin = useSelector((state) => state.login);
  const [activeImage, setActiveImage] = useState("");
  useEffect(() => {
    if (equipGallery.length > 0) {
      setActiveImage(equipGallery[0].imgOrVid);
    }
  }, [equipGallery]);
 
  return (
    <div className="card m-2 p-3 ">
      {equipGallery && equipGallery.length > 0 && (
        <>
          <img src={activeImage} alt={activeImage} className="detailImage" />
          <div className="d-flex justify-content-between flex-wrap poppins pt-3 ">
            <h5 className="fw-400 text-primary m-0 text-capitalize">
              {indequip_brand}
            </h5>
            {isLogin ? (
              <span className="fw-700 text-primary">
                Price : &#8377; {price}
              </span>
            ) : (
              <span
                className="fw-500 text-danger"
                data-bs-target="#loginModal"
                data-bs-toggle="modal"
                type="button"
              >
                Price on Request
              </span>
            )}
          </div>
          <p className="p-0">Concrete Batching Plant | Schwing Stetter</p>
          <div className="d-flex flex-wrap">
         
             
              <Image.PreviewGroup
                preview={{
                  onChange: (current, prev) =>
                    console.log(
                      `current index: ${current}, prev index: ${prev}`
                    ),
                }}
              >
                {equipGallery.map((gallery, index) => (
                  <Image
                    src={gallery.imgOrVid}
                    height="120px"
                    width='120px'
                    key={index}
                    alt={indequip_brand}
                    className="equipmentSubimg m-1 p-2"
                  />
                ))}
              </Image.PreviewGroup>
           
          </div>
        </>
      )}
    </div>
  );
}
