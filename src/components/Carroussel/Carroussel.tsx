import React, { Component } from "react";
import Slider from "react-slick";
import Cat_index from '../../assets/img/MCK-catalog-index.png'
import Car_index from '../../assets/img/MCK-car-index.png'
import Mck from '../../assets/img/Home-screen.png'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carroussel.css';


type Props = {
  img: string[];
}

export default class Fade extends Component {
    render() {
      const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <Slider {...settings}>
                <img src={Cat_index} alt="" />
                <img src={Car_index} alt="" />
                <img src={Mck} alt="" />
          </Slider>
        </div>
      );
    }
  }