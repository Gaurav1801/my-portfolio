import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Skills() {
  var settings = {
    // dots: true,
    // infinite: false,
    // speed: 500,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    // initialSlide: 0,
    infinite: true,
  slidesToShow: 3,
  autoplay: true,
  speed: 7000,
  autoplaySpeed: 0,
  arrows: false,
  slidesToScroll: 4,
  easing: "linear",
    // dots: true,
    // infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <>
    <section id='skills' className='bg-blue-400'>
      <div className='text-center'><h1 className='text-4xl text-black font-bold'>Skills</h1></div>
      <div className="md:mx-32 pt-10 mx-10">
         <Slider {...settings}>
        <div className=''>
          <h3><img className='h-[210px] flex items-center' src="./image/html.png" alt="" /></h3>
        </div>
        <div className=''>
          <h3><img className='h-[210px]' src="./image/css.png" alt="" /></h3>
        </div>
        <div className=''>
          <h3><img className='h-[210px]' src="./image/javascript.png" alt="" /></h3>
        </div>
        <div className=''>
          <h3><img className='h-[210px]' src="./image/node.png" alt="" /></h3>
        </div>
        <div className=''>
          <h3><img className='h-[210px]' src="./image/express.png" alt="" /></h3>
        </div>
        <div className=''>
          <h3><img className='h-[210px]' src="./image/mongodb.png" alt="" /></h3>
        </div>
        <div className=''>
          <h3><img className='h-[160px]' src="./image/tailwind.png" alt="" /></h3>
        </div>
      </Slider>
      </div>
      
    </section>
    </>
  )
}
