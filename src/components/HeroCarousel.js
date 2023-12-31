import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car1 from "../assets/car1.png"
import car2 from "../assets/car2.png"
import car3 from "../assets/car3.png"

import { FaArrowRight } from "react-icons/fa"

;


export default class SimpleSlider extends Component {



  render() {
    const settings = {  
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="mt-6">
        <Slider {...settings}>
          <div>
            <img src={car1} className="h-[400px] lg:h-auto w-full" />
          </div>
  

          <div>
            <img src="https://cdn.shopify.com/s/files/1/0081/7374/8305/files/Desktop_Hydrating_Spring_Web_banner_1920x.jpg?v=1648834445" className="h-[400px] lg:h-auto w-full" />
          </div>

          <div>
            <img src="https://cdn.shopify.com/s/files/1/0081/7374/8305/files/Desktop_03-06_Deep_Cleanse_Haircare_1920x.jpg?v=1646555947" className="h-[400px] lg:h-auto w-full" />
          </div>

          <div>
            <img src={car2} className="h-[400px] lg:h-auto w-full" />
          </div>

          <div>
            <img src={car3} className="h-[400px] lg:h-auto w-full" />
          </div>



        </Slider>
      </div>
    );
  }
}