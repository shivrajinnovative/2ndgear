import React from 'react'
import Slider from "react-slick";
import image1 from './../assets/images/blog/image1.png'
import image2 from './../assets/images/blog/image2.png'
import image3 from './../assets/images/blog/image3.png'

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

export default function Blog() {

        var settings = {
          dots: true,
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
              breakpoint: 600,
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


  return (
    <div className='bg-secondary blog'>
    <div className='container py-5'>
        <h1 className='text-center poppins fw-500 py-5'>Blog</h1>
        {/* <div className="row">
            <div className="col-md-6 col-lg-4 p-3">
                <div className="blogCard bg-white border p-3">
                    <div className="blogHeader">
                        <img src={dummyimg} alt={dummyimg}  />
                    </div>
                    <div className="blogBody">
                        <h5>Top Construction Equipment Rental Compan</h5>
                        <p className='m-0'>by Aparna K S</p>
                        <p>June 23, 2023  .10 mins read</p>
                    </div>
                </div>
            </div>
        </div> */}
       <div className="container">
       <div className="slider-container">
        <Slider {...settings}>
        <div className="col-md-6 col-lg-4 p-3">
                <div className="blogCard bg-white border p-3">
                    <div className="blogHeader">
                        <img src={image1} alt={image1}  />
                    </div>
                    <div className="blogBody">
                        <h5>Top Construction Equipment Rental Compan</h5>
                        <p className='m-0'>by Aparna K S</p>
                        <p>June 23, 2023  .10 mins read</p>
                    </div>
                </div>
            </div> <div className="col-md-6 col-lg-4 p-3">
                <div className="blogCard bg-white border p-3">
                    <div className="blogHeader">
                        <img src={image2} alt={image2}  />
                    </div>
                    <div className="blogBody">
                        <h5>Best Self Loading Concrete Mixer in India</h5>
                        <p className='m-0'>by Aparna K S</p>
                        <p>June 23, 2023  .10 mins read</p>
                    </div>
                </div>
            </div> <div className="col-md-6 col-lg-4 p-3">
                <div className="blogCard bg-white border p-3">
                    <div className="blogHeader">
                        <img src={image3} alt={image3}  />
                    </div>
                    <div className="blogBody">
                        <h5>List of Road Construction Companies in India</h5>
                        <p className='m-0'>by Aparna K S</p>
                        <p>June 23, 2023  .10 mins read</p>
                    </div>
                </div>
            </div>
        </Slider>
      </div>
       </div>
      </div>
    </div>
  )
}
