import React from "react";
import Slider from "react-slick";
import dummy from "./../../../assets/dummy.png";
import location from "./../../../assets/icons/location.svg";

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`custom-arrow custom-prev-arrow ${className}`}
      onClick={onClick}
    >
      <i className="bi bi-arrow-left"></i>
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
      <i className="bi bi-arrow-right"></i>
    </div>
  );
};
export default function RelatedEquipments() {
  var settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  let products = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <div className="container my-4 relatedEquipment">
      <div className="d-flex justify-content-between poppins">
        <h5 className="fw-500 text-primary ">Related Equipments</h5>
        <a href="" className="fw-400 text-primary">
          View All
        </a>
      </div>
      <div className="">
        <Slider {...settings}>
          {products.map((product, index) => {
            return (
              <div className="p-3">
                <div className="card p-3 rounded-5">
                  <img src={dummy} alt={dummy} />
                  <h5 className="poppins fw-500 mt-3">Cp 30 Batching Plant</h5>
                  <div
                    className="d-flex justify-content-between py-1"
                    style={{ "font-size": "17px" }}
                  >
                    <span>Cp 30</span>
                    <span>2012</span>
                  </div>
                  <p className="poppins fw-400 border-top border-bottom">
                    Concrete Batching Plant | Schwing Stetter
                  </p>

                  <p className="m-0 poppins fw-400 d-flex">
                    <img src={location} alt={location} className="mx-2" /> Panchgani, Maharashtra
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
