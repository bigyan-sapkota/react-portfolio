import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

const items = [
  {
    icon: <IoIosMail />,
    text: "bigyansapkotacodes@gmail.com",
  },
  {
    icon: <MdCall />,
    text: "+977-9841644488",
  },
  {
    icon: <IoLocationSharp />,
    text: "Chitwan Nepal",
  },
];

const socials = [
  { icon: <FaGithub />, link: "https://github.com/bigyan-sapkota" },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/bigyan-sapkota-4b949929a/",
  },
  {
    icon: <FaInstagramSquare />,
    link: "https://www.instagram.com/bigyansapkota/",
  },
];

const Footer = () => {
  return (
    <section className="bg-black text-[#737373] px-5 pt-5 pb-6 mt-7 md:px-32 md:pt-9">
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <h2 className="font-semibold mb-3 text-xl text-white md:text-2xl">
            Find Me On
          </h2>
          {items.map((item, ind) => (
            <div
              key={ind}
              className="flex items-center gap-2 text-sm mb-2 font-light text-white"
            >
              <div className="text-lg md:text-xl">{item.icon}</div>
              <div>{item.text}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-evenly md:gap-10">
          {socials.map((social, j) => (
            <div key={j}>
              <div>
                <a
                  href={social.link}
                  target="_blank"
                  className="link hover:cursor-pointer text-xl hover:text-white md:text-2xl"
                >
                  {social.icon}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="font-normal text-sm mt-4">
        Copyright &copy; Bigyan Sapkota - 2023
      </div>
    </section>
  );
};

export default Footer;
