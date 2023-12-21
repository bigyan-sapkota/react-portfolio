import React from "react";
import Button from "./Button";

const NavItems = ({ current, setCurrent, className }) => {
  return (
    <div className={className}>
      <ul className="flex flex-col md:flex-row md:items-center md:gap-10 md:font-normal md:text-xl">
        <li
          onClick={() => {
            setCurrent("home");
          }}
        >
          <p className="cursor-pointer hover:scale-[1.03] text-center py-4 md:py-0">
            Home
          </p>
          <hr className="bg-gray-200 h-0.5 md:hidden" />
          <hr
            className={
              current === "home" ? "bg-teal-500 h-1 mt-1 w-[80%]" : "hidden"
            }
          />
        </li>
        <li
          onClick={() => {
            setCurrent("projects");
          }}
        >
          <p className="cursor-pointer hover:scale-[1.03] text-center py-4 md:py-0">
            Projects
          </p>
          <hr className="bg-gray-200 h-0.5 md:hidden" />
          <hr
            className={
              current === "projects" ? "bg-teal-500 h-1 mt-1 w-[80%]" : "hidden"
            }
          />
        </li>
        <li
          onClick={() => {
            setCurrent("services");
          }}
        >
          <p className="cursor-pointer hover:scale-[1.03] text-center py-4 md:py-0">
            Services
          </p>

          <hr
            className={
              current === "services" ? "bg-teal-500 h-1 mt-1 w-[80%]" : "hidden"
            }
          />
        </li>
        <div className="flex justify-center pt-4 pb-10">
          <Button className="md:hidden" />
        </div>
      </ul>
    </div>
  );
};

export default NavItems;
