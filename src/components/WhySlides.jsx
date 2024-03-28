import React from "react";
import Slider from "react-slick";

const WhySlides = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false,
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
        <div>
          <div className="quotes text-xs">
            <h4 className="font-bold">I was scammed by my wife!</h4>
            <p className="text-xs">~ DIASPORAN LIVING IN IRELAND</p>
          </div>
        </div>
        <div>
          <div className="quotes text-xs ">
            <h4 className="font-bold">The form was too long!!</h4>
            <p className="text-xs">~ ~ GOVERNMENT WORKER IN ABUJA</p>
          </div>
        </div>
        <div>
          <div className="quotes text-xs">
            <h4 className="font-bold">I can’t track my repayments</h4>
            <p className="text-xs">~ DIASPORAN LIVING IN IRELAND</p>
          </div>
        </div>
        <div>
          <div className="quotes text-xs">
            <h4 className="font-bold">They sell to diasporan clients at higher prices, that’s price discrimination. It is not fair.</h4>
            <p className="text-xs">~ ~ SOMEONE IN CANADA</p>
          </div>
        </div>
        <div>
          <div className="quotes text-sm">
            <h4 className="font-bold">I was scammed by my wife!</h4>
            <p className="text-xs">~ DIASPORAN LIVING IN IRELAND</p>
          </div>
        </div>
        <div>
          <div className="quotes text-sm">
            <h4 className="font-bold">I was scammed by my wife!</h4>
            <p className="text-xs">~ DIASPORAN LIVING IN IRELAND</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default WhySlides;
