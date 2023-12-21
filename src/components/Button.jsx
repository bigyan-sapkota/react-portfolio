import React from "react";

const Button = (props) => {
  return (
    <button className={props.className}>
      <a
        href="#"
        className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-10 py-2 rounded-md text-sm md:text-base md:px-4"
      >
        Resume
      </a>
    </button>
  );
};

export default Button;
