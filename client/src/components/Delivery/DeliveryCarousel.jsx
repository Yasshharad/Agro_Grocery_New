import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import DeliveryCategoryCard from "./DeliveryCategoryCard";

const DeliveryCarousel = () => {
  const categories = [
    {
      image:
        "https://agro-grocery.s3.ap-south-1.amazonaws.com/tomato.png",
      title: "Tomato",
    },
    {
      image:
        "https://agro-grocery.s3.ap-south-1.amazonaws.com/onion.png",
      title: "Onion",
    },
    {
      image:
        "https://agro-grocery.s3.ap-south-1.amazonaws.com/banana.png",
      title: "Banana",
    },
    {
      image:
        "https://agro-grocery.s3.ap-south-1.amazonaws.com/carrot.png",
      title: "Carrot",
    },
    {
      image:
        "https://agro-grocery.s3.ap-south-1.amazonaws.com/brocolli.png",
      title: "Brocolli",
    },
    {
      image:
        "https://agro-grocery.s3.ap-south-1.amazonaws.com/Spinach.png",
      title: "Spinach",
    },
    {
      image:
        "https://agro-grocery.s3.ap-south-1.amazonaws.com/lady%20finger.png",
      title: "Lady's fingers",
    },
    {
      image:
        "https://agro-grocery.s3.ap-south-1.amazonaws.com/strawberry.png",
      title: "Strawberry",
    },
    {
      image:
        "https://agro-grocery.s3.ap-south-1.amazonaws.com/pea.png",
      title: "Pea",
    },
  ];

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    modules: [Navigation],
    className: "mySwiper",
    navigation: true,
  };

  return (
    <>
      <h1 className="text-xl mt-4 md:mt-8 md:text-3xl md:font-semibold mb-5">
        Inspiration for yout first order
      </h1>
      <div className="lg:hidden grid grid-cols-3 md:grid-cols-4 gap-3 justify-center">
        {categories.map((Product, index) => (
          <DeliveryCategoryCard key={index} {...Product} />
        ))}
      </div>
      <div className="hidden lg:block">
        <Swiper {...slideConfig}>
          {categories.map((Product, index) => (
            <SwiperSlide key={index}>
              <DeliveryCategoryCard {...Product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default DeliveryCarousel;
