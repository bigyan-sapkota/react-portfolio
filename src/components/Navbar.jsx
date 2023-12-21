import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Button from "./Button";

const Navbar = () => {
  return (
    <section>
      <nav className="pt-10 mb-12 flex justify-between">
        <h1 className="text-2xl font-bold">
          BIG
          <span className="text-teal-500">YAN</span>
        </h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill className="cursor-pointer text-[16px]" />
          </li>
          <Button className="ml-4 md:hidden" />
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
