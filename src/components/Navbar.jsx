import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import NavItems from "./NavItems";

const Navbar = () => {
  const [current, setCurrent] = useState("home");
  const [showMenu, setshowMenu] = useState(false);
  return (
    <section>
      <nav className="pt-10 mb-12 flex justify-between items-center">
        <h1 className="text-2xl font-bold md:text-3xl">
          BIG
          <span className="text-teal-500">YAN</span>
        </h1>
        <div className="flex items-center">
          <div className="md:hidden">
            <HiMenuAlt3
              className="cursor-pointer text-3xl relative"
              onClick={() => setshowMenu((prev) => !prev)}
            />
            {showMenu && (
              <NavItems className="absolute w-full right-0 top-24 bg-white border border-gray-200 shadow-lg" />
            )}
          </div>

          {/* Nav Items */}
          <NavItems
            current={current}
            setCurrent={setCurrent}
            className="hidden md:block"
          />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
