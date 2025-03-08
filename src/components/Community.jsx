import Image from "next/image";
import React from "react";
import Link from "next/link";
import { communityData } from "./CommunityData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SliderButton } from "./CommunityData";

const Community = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className=" my-20">
      <div className="max-w-[1350px] mx-auto w-full flex flex-col font-sans  p-4">
        <Slider {...settings}>
          {communityData.map((data, i) => (
            <div key={i} className="px-2 md:px-4 lg:px-4">
              <div className="border  flex-col items-center justify-center flex  border-gray-400 rounded-lg overflow-hidden">
                {/* Image  */}
                <div className="w-full relative">
                  <Image
                    alt="house Image"
                    width={300}
                    height={300}
                    src={data.image}
                    className="w-full h-auto"
                  />
                  <div className="flex top-[5%] left-[5%] gap-2 absolute text-xs font-semibold text-white">
                    <Link
                      href={"/"}
                      className="rounded p-1 bg-white hover:bg-communityYellow duration-300 text-black hover:text-white transition-colors"
                    >
                      18 Quick Move-Ins
                    </Link>
                    <Link
                      href={"/"}
                      className="rounded p-1 bg-communityYellow hover:bg-white duration-300 text-white hover:text-black transition-colors"
                    >
                      Premetion Available
                    </Link>
                  </div>
                </div>
                {/* Lower section */}
                <div className="flex flex-col px-4 py-5 w-full ">
                  <div className="flex flex-col justify-start  w-full">
                    <h4 className="text-lg font-semibold text-communityDarkBlue ">
                      {data.name}
                    </h4>
                    <p className="text-base text-gray-700">{data.location}</p>
                  </div>
                  {data.collections.map((collection, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-1 font-medium  "
                    >
                      <div className="flex whitespace-nowrap flex-wrap gap-x-1 text-sm  ">
                        <Link href={"/"}>
                          <span className="text-communityBlue underline">
                            {collection.name}
                          </span>
                        </Link>

                        <span className="text-gray-600">{collection.type}</span>
                        <span>{collection.price}</span>
                      </div>
                      <div className="flex items-center  justify-between pr-4 gap-3">
                        {collection.houseDetail.map((item, index) => (
                          <div key={index} className="flex">
                            <Link
                              href={"/"}
                              className="flex items-center justify-center gap-1 font-semibold text-base text-[#003666]"
                            >
                              <span>{item.icon}</span>
                              <span>{item.text}</span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="pt-[30px] flex justify-between">
                    <div>
                      <SliderButton href="/">Learn More</SliderButton>
                    </div>
                    <div>
                      <SliderButton href="/">View Homes</SliderButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Community;
