import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';

const SimpleSlider = ({children}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Example of adding autoplay
    autoplaySpeed: 3000, // 3 seconds interval
  };
  return (
    <div style={{ maxWidth: '100%', margin: 'auto' }}>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
