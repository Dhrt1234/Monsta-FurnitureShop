"use client"

import React from 'react'
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function BannerSlider() {
    let Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
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
    <section className="max-w-[100%]">
          <Slider {...Settings}>
            <div>
              <Image
                src="/images/add8f1ce-ae5a-4d6b-b573-8c208b6745d5-1671388062.jpg"
                alt="Slide 1"
                width={800} 
                height={200} 
                layout="responsive" 
              />
              
            </div>
            <div>
              <Image
                src="/images/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.jpg"
                alt="Slide 2"
                width={800} 
                height={200}
                layout="responsive"
              />
            </div>
            <div>
              <Image
                src="/images/541928cd-e696-4c09-9f1c-bc9d7127c451-1671388153.jpg"
                alt="Slide 3"
                width={800}
                height={200}
                layout="responsive"
              />
            </div>
          </Slider>
        </section>
  )
  
}
