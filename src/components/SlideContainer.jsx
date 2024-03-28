import React from "react";
import Slider from "react-slick";
import PartnerCard from "./PartnerCard";

import { ourPartners } from "../utils/constants";

const SlideContainer = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    autoplay: false, 
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
            initialSlide: 2 
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>       
        {ourPartners.map((partner, idx) => ( 
            <div>
                <PartnerCard key={idx} img={partner.img} name={partner.name} position={partner.position} />
            </div>
          ))} 
      </Slider>
    </div>
  );
};

export default SlideContainer;
