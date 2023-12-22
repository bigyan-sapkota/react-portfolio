import React from "react";
import contact from "../assets/contact.jpg";

const Contact = () => {
  return (
    <section>
      <h3 className="text-xl font-medium md:text-3xl">Contact Me</h3>
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <img src={contact} className="md:w-[600px] py-5 md:py-0" />
        </div>
        <div className="p-2 pt-4 rounded-lg -mt-3 md:border md:border-gray-200 md:shadow-lg md:px-7 md:pt-10 md:pb-5 md:mt-0 md:w-[400px]">
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input"
          />
          <input type="email" placeholder="Email" className="contact-input" />
          <input type="text" placeholder="Subject" className="contact-input" />
          <input
            type="text"
            placeholder="Your Message"
            className="contact-input"
          />
          <div className="flex justify-center mt-2">
            <button className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-10 py-2 rounded-md text-sm md:text-base md:px-4">
              Send Mail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
