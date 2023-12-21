import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import deved from "../assets/dev-ed-wave.png";

const Navbar = () => {
  return (
    <section className="min-h-screen">
      <nav className="pt-10 mb-12 flex justify-between">
        <h1 className="text-xl font-medium">BIGYAN</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill className="cursor-pointer text-[16px]" />
          </li>
          <li>
            <a
              href="#"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-4"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex-column md:flex-row">
        <div className="texts">
          <div className="text-center md:text-left">
            <h2 className="text-3xl py-3 text-teal-600 font-medium md:text-5xl">
              Bigyan Sapkota
            </h2>
            <h3 className="text-2xl pb-3 md:text-3xl">Web Developer</h3>
            <p className="text-base pb-5 leading-7 text-gray-800">
              I excel in creating dynamic and responsive websites, delivering
              seamless user experiences through innovative design and efficient
              functionality.
            </p>
          </div>
          <div className="text-3xl flex justify-center gap-12 py-3 text-gray-600">
            <AiFillGithub className="cursor-pointer border border-black rounded-full p-2 w-12 h-12 shadow-lg" />
            <AiFillLinkedin className="cursor-pointer border border-black rounded-full p-2 w-12 h-12 shadow-lg" />
            <AiFillInstagram className="cursor-pointer border border-black rounded-full p-2 w-12 h-12 shadow-lg" />
          </div>
        </div>

        <div className="image">
          <div className="m-4 relative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 overflow-hidden">
            <img src={deved} className="object-cover h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
