import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import axios from 'axios';

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

  
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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


        useEffect(()=>{
          const fetchData = async () => {
              try {
                const response = await axios.get('http://2gear.in/staging/api/get-blogs-list');
                setData(response.data);
                console.log(response.data);
              } catch (error) {
                setError(error.message);
              } finally {
                setLoading(false);
              }
            };
            fetchData();
  
      },[])

      let dummyarray=[{},{},{},{},{},{},{}]
  return (
    <div className='bg-secondary blog'>
    <div className='container py-5'>
        <h1 className='text-center poppins fw-500 py-5'>Blog</h1>
       <div className="container">
       <div className="slider-container">
        <Slider {...settings}>
          {
            dummyarray.map((items,index)=>{
                  return (
                    <div className="col-md-6 col-lg-4 p-3" key={index}>
                    <div className="blogCard bg-white border p-3">
                        <div className="blogHeader">
                            <img src={data.blogsData?data.blogsData[0].blog_image:""} alt={data.blogsData?data.blogsData[0].blog_image:"loading..."}  />
                        </div>
                        <div className="blogBody">
                            <h5>{data.blogsData?data.blogsData[0].blog_title:""}</h5>
                            <p className='m-0'>by Aparna K S</p>
                            <p>{data.blogsData?data.blogsData[0].blog_date:""}</p>
                        </div>
                    </div>
                </div> 
                  )
            })
          }
        </Slider>
      </div>
       </div>
      </div>
    </div>
  )
}
