import React from "react";
import Slider from "react-slick";
import LazyLoad from "react-lazyload";
import { useDynamicQuery } from "../../../utils/apiUtils";

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
  const { data, error, isLoading } = useDynamicQuery(
    ["blogs"],
    "get-blogs-list"
  );

  const settings = {
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

  if (isLoading || error) return <></>;
  return (
    <div className="bg-secondary blog">
      <div className="container py-5">
        <h1 className="text-center poppins fw-500 py-5">Blog</h1>
        <div className="container">
          <div className="slider-container">
            <Slider {...settings}>
              {data.blogsData &&
                data.blogsData?.map((item, index) => (
                  <div className="col-md-6 col-lg-4 p-3" key={index}>
                    <div className="blogCard bg-white border p-3">
                      <div className="blogHeader">
                        <LazyLoad height={200} offset={100}>
                          <img src={item.blog_image} alt={item.blog_title} />
                        </LazyLoad>
                      </div>
                      <div className="blogBody">
                        <h5>{item.blog_title}</h5>
                        <p className="m-0">by Aparna K S</p>
                        <p>{item.blog_date}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
