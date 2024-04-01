import React from "react";
import Slider from "react-slick";
import PartnerCard from "./PartnerCard";
import { TiMediaPlayReverse, TiMediaPlay } from "react-icons/ti";

import { ourPartners } from "../utils/constants";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="absolute z-10 -bottom-12 right-16">
      <button onClick={onClick} className="h-8 w-8 rounded-full bg-[#335F32] flex items-center justify-center">
        <TiMediaPlay size={20} color="white" />
      </button>
    </div> 
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="absolute z-10 -bottom-12 right-28">
      <button onClick={onClick} className="h-8 w-8 rounded-full bg-[#335F32] flex items-center justify-center">
      <TiMediaPlayReverse size={20} color="white" />
      </button>
    </div> 
  );
}

const SlideContainer = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    autoplay: false, 
    speed: 500,
    autoplaySpeed: 1000,
    cssEase: "linear",
    className: "center",
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
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            className: "center",
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            className: "center",
          }
        }
      ]
  };
  return (
    <div className="slider-container w-full relative pl-16 md:pl-0 flex flex-col justify-center">
      <Slider {...settings} className="relative">       
        {ourPartners.map((partner, idx) => ( 
            <div key={idx}>
                <PartnerCard key={idx} img={partner.img} name={partner.name} position={partner.position} />
            </div>
          ))} 
      </Slider>
    </div>
  );
};

export default SlideContainer;
