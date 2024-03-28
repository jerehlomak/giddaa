import React from "react";
import Slider from "react-slick";
import { 
    reddit,
    viber,
    vimeo,
    chrome,
    dropbox } from '../assets'


const Slides = () => {
  const settings = {
    dots: false, 
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2 
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={vimeo} alt="slide" />
        </div>
        <div>
            <img src={chrome} alt="slide" />
        </div>
        <div>
            <img src={dropbox} alt="slide" />
        </div>
        <div>
            <img src={reddit} alt="slide" />
        </div>
        <div> 
            <img src={viber} alt="slide" /> 
        </div>
      </Slider>
    </div>
  );
}

export default Slides;
