import React from 'react'
import {Image, Slider} from "antd";

const SilderComponent = ({arrImages}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
      <Slider settings={settings}>
        {arrImages.map((image) => {
            <Image src={image} alt="slider" preview={false} width= "100%"/>

        })}
      </Slider>
  )
}

export default SilderComponent