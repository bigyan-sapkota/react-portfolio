import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import deved from "../assets/dev-ed-wave.png";
import Button from "./Button";

const Hero = () => {
  return (
    <section>
      <div className="flex-column md:flex-row md:justify-between md:items-center">
        <div className="texts">
          <div className="text-center md:text-left">
            <h2 className="text-3xl text-teal-600 font-semibold md:text-5xl">
              Bigyan Sapkota
            </h2>
            <h3 className="text-2xl py-3 font-medium md:text-4xl md:py-5">
              Web Developer
            </h3>
            <p className="text-base pb-5 leading-7 text-gray-800 md:text-lg md:max-w-xl md:leading-8">
              I excel in creating dynamic and responsive websites, delivering
              seamless user experiences through innovative design and efficient
              functionality.
            </p>
          </div>
          <div className="text-3xl flex justify-center gap-12 py-3 text-gray-600 md:absolute md:flex-col md:-left-3 md:top-80 md:gap-6 md:pr-2 md:py-2 md:bg-black md:rounded-t-xl md:rounded-b-xl md:text-white">
            <AiFillGithub className="social-media" />
            <AiFillLinkedin className="social-media" />
            <AiFillInstagram className="social-media" />
          </div>
          <div className="pt-3">
            <Button className="hidden md:block" />
          </div>
        </div>

        <div className="image">
          <div className="bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 overflow-hidden md:w-96 md:h-96 mx-auto my-5">
            <img src={deved} className="object-cover h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
