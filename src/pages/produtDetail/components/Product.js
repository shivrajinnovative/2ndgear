import React from "react";
import Slider from "react-slick";
import './../productDetail.css'
const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`custom-arrow custom-prev-arrow ${className}`}
      onClick={onClick}
    >
      <i className="bi bi-chevron-left"></i>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`custom-arrow custom-next-arrow ${className}`}
      onClick={onClick}
    >
      <i className="bi bi-chevron-right"></i>
    </div>
  );
};
export default function Product({ equipGallery,indequip_brand }) {
  var settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplaySpeed: 8000,
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="card m-2 p-3 ">
      {equipGallery && equipGallery.length > 0 && (
        <>
          <img
            src={equipGallery[0].imgOrVid}
            alt={equipGallery[0].imgOrVid}
            className="img-fluid"
          />
          <div className="d-flex justify-content-between poppins pt-3 ">
            <h5 className="fw-400 text-primary m-0">{indequip_brand}</h5>
            <span className="fw-500 text-danger">Price on Request</span>
          </div>
          <p className="p-0">Concrete Batching Plant | Schwing Stetter</p>
          <div className="col-md-6">
            <Slider {...settings} className='slider'>
              {equipGallery && equipGallery.map((gallery,index) => {
                return (
                  <div className="px-1" key={index}>
                  <img src={gallery.imgOrVid} alt={indequip_brand}  className="img-fluid mx-1" />
                </div>
                )
              })}
           
            </Slider>
          </div>
        </>
      )}
    </div>
  );
}
