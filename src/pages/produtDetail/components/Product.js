import React from 'react'
import dummy from './../../../assets/dummy.png'
import dummy2 from './../../../assets/dummy2.png'
import Slider from 'react-slick';
const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`custom-arrow custom-prev-arrow ${className}`}
        onClick={onClick}
      >
       <i class="bi bi-chevron-left"></i>
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
      <i class="bi bi-chevron-right"></i>
      </div>
    );
  };
export default function Product() {


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
    <div className='card m-2 p-3 produtDetail'>
        <img src={dummy2} alt={dummy2} className='img-fluid' />
        <div className='d-flex justify-content-between poppins pt-3 ' >
            <h5 className='fw-400 text-primary m-0'>Cp 30 Batching Plant</h5>
            <span className='fw-500 text-danger'>Price on Request</span>
        </div>
        <p className="p-0">Concrete Batching Plant | Schwing Stetter</p>
        <div className="col-md-6">
        <Slider {...settings}>  
            <div className='px-1'><img src={dummy} alt={dummy} className='img-fluid mx-1' /></div>
            <div className='px-1'><img src={dummy} alt={dummy} className='img-fluid mx-1' /></div>
            <div className='px-1'><img src={dummy} alt={dummy} className='img-fluid mx-1' /></div>
            <div className='px-1'><img src={dummy} alt={dummy} className='img-fluid mx-1' /></div>
            <div className='px-1'><img src={dummy} alt={dummy} className='img-fluid mx-1' /></div>
            <div className='px-1'><img src={dummy} alt={dummy} className='img-fluid mx-1' /></div>
            <div className='px-1'><img src={dummy} alt={dummy} className='img-fluid mx-1' /></div>
        </Slider>
        </div>
    </div>
  )
}
