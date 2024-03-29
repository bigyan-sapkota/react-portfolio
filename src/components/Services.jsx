import React from "react";
import design from "../assets/design.png";
import code from "../assets/code.png";
import consulting from "../assets/consulting.png";

const services = [
  {
    img: code,
    topic: "Efficient Coding Practices",
    description:
      "Implementing efficient coding practices to enhance the performance and functionality of your web applications.",
    title: "Languages and Frameworks",
    tools: ["JavaScript", "ReactJS", "Python"],
  },
  {
    img: design,
    topic: "Creative Design Solutions",
    description:
      "Crafting visually appealing designs using tools like Canva, Photoshop basics, and Figma basics to meet your design needs.",
    title: "Design Tools",
    tools: ["Canva", "Photoshop", "Figma"],
  },
  {
    img: consulting,
    topic: "Beginner-Friendly Guidance",
    description:
      "Providing beginner-friendly guidance and support for individuals new to web development, ensuring a smooth learning journey.",
    title: "Guidance Areas",
    tools: ["JavaScript", "Tailwind CSS", "React"],
  },
  // Add more objects as needed
];

const Services = () => {
  return (
    <section className="mt-3 md:mt-14 md:text-lg" id="services">
      <div>
        <h3 className="text-xl font-medium md:text-3xl py-2">
          Services I offer
        </h3>
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

      <div className="md:flex md:gap-12">
        {services.map((service, i) => (
          <div
            key={i}
            className="text-center shadow-md border border-gray-100 p-3 md:p-5 rounded-xl my-10 md:text-lg md:shadow-xl"
          >
            <div className="flex justify-center">
              <img src={service.img} width={70} height={70} />
            </div>
            <h3 className="text-lg font-semibold pt-3 pb-1 md:font-bold md:pt-5 md:pb-3">
              {service.topic}
            </h3>
            <p className="py-1 md:py-2">{service.description}</p>
            <h4 className="py-1 text-teal-600 md:py-2">{service.title}</h4>
            {service.tools.map((item, j) => (
              <p key={j} className="text-gray-800 md:pb-0.5">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
