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
  const footerLinks = [
    { id: 1, text: "Datenschutzerklärung", url: "#" },
    { id: 2, text: "Impressum", url: "#" },
    { id: 3, text: "© CROWND Estates GmbH", isText: true },
    { id: 4, text: "Datenschutzeinstellungen", url: "#" },
  ];
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
    <div className="">
      <div className="">
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index} className=" overflow-hidden relative group">
              <div>
                <Image
                  src={carouselImages[index]}
                  alt="carousel"
                  width={500}
                  height={500}
                  className="group-hover:scale-110 duration-500 transition-transform"
                />
              </div>
              <div className="absolute bottom-[5%] group-hover:bottom-[13%] transition-all duration-500 right-[7%]">
                <Image
                  src={carouselText[index]}
                  alt="carousel hover"
                  width={100}
                  height={100}
                />
              </div>
              <div></div>
              <div className="absolute bottom-[5%] group-hover:opacity-100 opacity-0 transition-all duration-500 right-[7%]">
                <p className="font-medium text-white text-left">
                  Herklotzgasse 42.1150 Wien
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="px-14 pt-14">
        <h2 className="text-2xl text-black font-normal font-serif">
          It's my life. It's my style. It's CROWND.
        </h2>
        <ul className="pt-9">
          {footerLinks.map((link) => (
            <li key={link.id} className="inline-block pr-5">
              {link.isText ? (
                <p className="text-sm text-gray-500">{link.text}</p>
              ) : (
                <a href={link.url} className="text-sm text-gray-500">
                  {link.text}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SecondComp;
