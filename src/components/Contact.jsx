import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contact from "../assets/contact.jpg";
import { MdError } from "react-icons/md";

const Contact = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    subject: yup.string().required("Subject is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    message: yup.string().required("Subject is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section id="contact">
      <h3 className="text-xl font-medium md:text-3xl">Contact Me</h3>
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <img src={contact} className="md:w-[600px] py-5 md:py-0" />
        </div>
        <form
          className="p-2 pt-4 rounded-lg -mt-3 md:border md:border-gray-200 md:shadow-lg md:px-7 md:pt-10 md:pb-5 md:mt-0 md:w-[400px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input"
            {...register("fullName")}
          />
          {errors.fullName?.message ? (
            <p className="-mt-2 mb-2 text-base text-red-600 flex items-center gap-1">
              <MdError />
              {errors.fullName.message}
            </p>
          ) : (
            ""
          )}
          <input
            type="email"
            placeholder="Email"
            className="contact-input"
            {...register("email")}
          />
          {errors.email?.message ? (
            <p className="-mt-2 mb-2 text-base text-red-600 flex items-center gap-1">
              <MdError />
              {errors.email.message}
            </p>
          ) : (
            ""
          )}
          <input
            type="text"
            placeholder="Subject"
            className="contact-input"
            {...register("subject")}
          />
          {errors.subject?.message ? (
            <p className="-mt-2 mb-2 text-base text-red-600 flex items-center gap-1">
              <MdError />
              {errors.subject.message}
            </p>
          ) : (
            ""
          )}
          <input
            type="text"
            placeholder="Your Message"
            className="contact-input"
            {...register("message")}
          />
          {errors.message?.message ? (
            <p className="-mt-2 mb-2 text-base text-red-600 flex items-center gap-1">
              <MdError />
              {errors.message.message}
            </p>
          ) : (
            ""
          )}
          <div className="flex justify-center mt-2">
            <input
              type="submit"
              value="Send Mail"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-10 py-2 rounded-md text-sm md:text-base md:px-4"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
