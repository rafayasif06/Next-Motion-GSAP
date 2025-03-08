import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const carouselImages = [
  "/footer/slide-image.png",
  "/footer/slide-image2.png",
  "/footer/slide-image3.png",
  "/footer/slide-image4.png",
  "/footer/slide-image5.png",
  "/footer/slide-image6.png",
];
const carouselText = [
  "/footer/slide-hover.png",
  "/footer/slide-hover2.png",
  "/footer/slide-hover3.png",
  "/footer/slide-hover4.png",
  "/footer/slide-hover5.png",
  "/footer/slide-hover6.png",
];

const SecondComp = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="font-roboto">
      <div className="">
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index} className=" overflow-hidden relative group">
              <div className="relative">
                <div className="absolute left-0 top-0 w-full h-full bg-black/40 z-10"/>
                <Image
                  src={carouselImages[index]}
                  alt="carousel"
                  width={500}
                  height={500}
                  className="group-hover:scale-110 duration-500 transition-transform"
                />
              </div>
              <div className="absolute bottom-[5%] group-hover:bottom-[13%] transition-all duration-500 right-[7%] z-20">
                <Image
                  src={carouselText[index]}
                  alt="carousel hover"
                  width={100}
                  height={100}
                />
              </div>
              <div className="absolute bottom-[5%] z-20 group-hover:opacity-100 opacity-0 transition-all duration-500 right-[7%]">
                <p className="font-medium text-white text-left ">
                  Herklotzgasse 42.1150 Wien
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SecondComp;
