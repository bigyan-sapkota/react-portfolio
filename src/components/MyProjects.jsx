import React from "react";
import { SiWebpack } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { DiGhostSmall } from "react-icons/di";
import { FaSuitcase } from "react-icons/fa";

const projects = [
  {
    icon: <SiWebpack />,
    title: "OPEN-PRO",
    link: "https://open-pro-bigyan.netlify.app/",
    description: "UI based page",
  },
  {
    icon: <FaShoppingCart />,
    title: "SHOPPER",
    link: "https://shopper-bigyan.netlify.app/",
    description: "Ecommerce Site",
  },
  {
    icon: <FaSuitcase />,
    title: "Jobster",
    link: "https://jobster-bigyansapkota.netlify.app/",
    description: "Jobster",
  },
  {
    icon: <DiGhostSmall />,
    title: "Mini Projects",
    link: "https://mini-projects-bigyan.netlify.app/",
    description: "Mini Projects",
  },
];

const MyProjects = () => {
  return (
    <section id="projects" className="mb-7">
      <h3 className="text-xl font-medium md:text-3xl mb-3 md:mb-7">
        My Projects
      </h3>
      <div className="md:grid md:grid-cols-3 md:gap-14">
        {projects.map((item, i) => {
          return (
            <div
              key={i}
              className="border border-gray-200 rounded-xl shadow-lg flex flex-col items-center py-4 mb-5 md:py-7 md:shadow-md"
            >
              <a href={item.link} target="_blank">
                <div className="border-[7px] border-cyan-500 rounded-full text-5xl w-28 h-28 flex items-center justify-center">
                  {item.icon}
                </div>
                <h2 className="font-semibold text-center py-1 pt-2">
                  {item.title}
                </h2>
                <p className="text-center">{item.description}</p>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MyProjects;
