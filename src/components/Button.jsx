import React from "react";
import resume from "../assets/resume.pdf";

const Button = (props) => {
  return (
    <button className={props.className}>
      <a
        href="https://drive.google.com/file/d/1Y0JHDejLaVROOPFeUFMjC2QiM_xwMNOX/view?usp=sharing"
        target="_blank"
        className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-10 py-2 rounded-md text-sm md:text-base md:px-4"
      >
        Resume
      </a>
    </button>
  );
};

export default Button;
