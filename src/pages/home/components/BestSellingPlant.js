import React from "react";
import Slider from "react-slick";
import batchvenusforsale from "./../assets/images/bestSelling/batching-plant-venus-for-sale-image.jpg";
import rmcp from "./../assets/images/bestSelling/batching-plant-for-sale-img.jpg";
import rmcp2 from "./../assets/images/bestSelling/rmc-ready-mix-concrete-plant-image.jpg";
import rmcpplant from "./../assets/images/bestSelling/used-aquarius-rmc-plant-image.jpg";
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


export default function BestSellingPlant() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
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
  let data=[
    
    {
      title:"Batching Plant VENUS for Sale",
      subtitle:"Concrete Batching Plant | KYB",
      date:"24 CUM 2019",
      image:rmcp
    },
    {
      title:"Used Aquarius RMC plant",
      subtitle:"Concrete Batching Plant | Aquarius",
      date:"MP 21 2020 ",
     image:rmcpplant
    },
    {
      title:"RMC Ready Mix Concrete Plant",
      subtitle:"Concrete Batching Plant | Apollo",
      date:"24 CUM 2019",
      image:rmcp2
    },
    {
      title:"Batching Plant VENUS for Sale",
      subtitle:"Concrete Batching Plant | KYB",
      date:"24 CUM 2019",
      image:batchvenusforsale
    },
  ]
  
  const Cards=({item})=>{
    return (
      <div className="p-2">
      <div className="card mx-auto bestSelling">
            <div className="bestSellingHeader">
                <img className="img-fluid" src={item.image} alt={item.image} />
            </div>
            <div className="bestSellingBody  bg-secondary p-3 poppins fw-500">
                <h4>{item.title}</h4>
                <p className="bestSellingSubHeading">{item.subtitle}</p>
                <div className="fw-400">{item.date}</div>
               <a href="/" className="text-primary nav-link mt-2"> View Details  <i className="bi bi-arrow-right mx-1"></i> </a>
            </div>
        </div>
      </div>)
  }



  return (
    <div className="container p-5">
        <h1 className="text-center poppins fw-600 ">Best Selling Plants</h1>
      <div className="slider-container pb-4">
        <Slider {...settings}>
        {
          data.map((item,index)=>{
            return <Cards key={index} item={item}/>
          })
        }
        </Slider>
      </div>
    </div>
  );
}
