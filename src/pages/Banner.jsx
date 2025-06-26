import React from "react";
import { Link } from 'react-router';
// import Lottie from 'lottie-react';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import banner from 'bg.png'
import "./banner.css";

const Banner = () => {
  return (
    <div className="w-full ]">
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <div className="banner2 ">
          {/* <img src='/bg.png' /> */}
          {/* <p className="legend">Legend 1</p> */}
          <div className="flex flex-col justify-center items-center h-full lg:py-12 py-3">
            <Fade cascade>
              <span className="text-5xl text-blue-600 font-bold">
                <Typewriter
                  words={["Find Your Perfect Roommate Match"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                ></Typewriter>
              </span>
              <p className="text-white">
                Connect with compatible roommates based on lifestyle, budget,{" "}
                <br /> and location preferences
              </p>
              <Link to="browsListing">
                <button className="btn bg-[#9e4ee9] text-black border-none">Brows Listing</button>
              </Link>
            </Fade>
          </div>
        </div>
        <div className="banner3">
          {/* <img src='/bg.png'/> */}
          {/* <p className="legend">Legend 2</p> */}
            <div className="flex flex-col justify-center items-center h-full lg:py-12 py-3">
            <Fade cascade>
              <span className="text-5xl text-blue-600 font-bold">
                <Typewriter
                  words={["Find Your Perfect Roommate Match"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                ></Typewriter>
              </span>
              <p className="text-white">
                Connect with compatible roommates based on lifestyle, budget,{" "}
                <br /> and location preferences
              </p>
              <Link to="browsListing">
                <button className="btn bg-[#9e4ee9] text-black  border-none">Brows Listing</button>
              </Link>
            </Fade>
          </div>
        </div>
        <div className="banner4">
          {/* <img src='/bg.png' /> */}
          {/* <p className="legend">Legend 3</p> */}
            <div className="flex flex-col justify-center items-center h-full lg:py-12 py-3 ">
            <Fade cascade>
              <span className="text-5xl text-blue-600 font-bold">
                <Typewriter
                  words={["Find Your Perfect Roommate Match"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                ></Typewriter>
              </span>
              <p className="text-white">
                Connect with compatible roommates based on lifestyle, budget,{" "}
                <br /> and location preferences
              </p>
              <Link to="browsListing">
                <button className="btn bg-[#9e4ee9] text-black border-none">Brows Listing</button>
              </Link>
            </Fade>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
