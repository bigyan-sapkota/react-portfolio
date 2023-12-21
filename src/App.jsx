import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

const App = () => {
  return (
    <main className="px-5">
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
        <div className="text-center">
          <h2 className="text-3xl py-2 text-teal-600 font-medium">
            Bigyan Sapkota
          </h2>
          <h3 className="text-2xl py-2">Web Developer</h3>
          <p className="text-md py-5 leading-7 text-gray-800">
            I excel in creating dynamic and responsive websites, delivering
            seamless user experiences through innovative design and efficient
            functionality.
          </p>
        </div>
        <div className="text-3xl flex justify-center gap-12 py-3 text-gray-600">
          <AiFillGithub className="cursor-pointer" />
          <AiFillLinkedin className="cursor-pointer" />
          <AiFillInstagram className="cursor-pointer" />
        </div>
        <div className="m-5 relative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 overflow-hidden">
          <img src={deved} className="object-cover h-full w-full" />
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-xl pt-4 font-medium">Services I offer</h3>
          <p className="text-md py-2 leading-7 text-gray-800">
            I have hands-on experience developing several{" "}
            <span className="text-teal-500">personal projects</span>, showcasing
            strong command of CSS, JavaScript, HTML, & proficiency in{" "}
            <span className="text-teal-500">ReactJS.</span>
          </p>

          <p className="text-md py-2 leading-7 text-gray-800">
            I offer a spectrum of{" "}
            <span className="text-teal-500">web development </span>solutions
            equipped with a proficiency in{" "}
            <span className="text-teal-500">modern technologies</span> to meet
            diverse client needs.
          </p>
        </div>
        <div className="text-center shadow-xl p-5 rounded-xl my-10">
          <img src={design} width={100} height={100} />
          <h3 className="text-lg font-medium pt-5 pb-2">
            Powerful Development
          </h3>
          <p className="py-2">
            Crafting robust solutions tailored to your requirements with a
            strong foundation in coding principles.
          </p>
          <h4 className="py-2 text-teal-600">Development Tools I Use</h4>
          <p className="text-gray-800 pb-0.5">React</p>
          <p className="text-gray-800 pb-0.5">Tailwind CSS</p>
          <p className="text-gray-800 pb-0.5">VS Code</p>
        </div>
      </section>
    </main>
  );
};

export default App;
