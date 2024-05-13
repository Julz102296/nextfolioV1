"use client"

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
          form.current, 
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        },
      );
  };
  
  return (
    <section id="contact" className="relative flex flex-wrap lg:h-screen lg:items-center bg-slate-100">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <p className="text-2xl font-bold sm:text-3xl text-slate-700">Send a message!</p>

          {/* <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
            ipsa culpa autem, at itaque nostrum!
          </p> */}
        </div>

        <form ref={form} onSubmit={sendEmail} className="mt-8 grid grid-cols-4 gap-4">
            <div className="col-span-6 sm:col-span-4">
                <label for="Firstname" className="block text-sm font-medium text-gray-700">
                Name
                </label>

                <input
                type="text"
                name="user_name"
                id="FirstName"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"
                placeholder="Your name here"
                />
            </div>

            <div className="col-span-6 sm:col-span-4">
                <label for="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                <input
                type="email"
                name="user_email"
                id="Email"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"
                placeholder="your_email@gmail.com"
                />
            </div>

            <div className="col-span-6 sm:col-span-4">
            <label for="OrderNotes" className="block text-sm font-medium text-gray-700"> Message </label>

            <textarea
                id="OrderNotes"
                name="user_message"
                className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm p-2"
                rows="4"
                placeholder="Your message here..."
            ></textarea>
            </div>

            <div className="col-span-6">
                <label for="MarketingAccept" className="flex gap-4">
                <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                />

                <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and company announcements.
                </span>
                </label>
                <div className="p-2 m-2">
                  {/* Email JS service ID: service_svp0bkb */}
                  {/* Email JS template ID: template_1yctw6u */}
                  {/* Email JS public key: h6Klc_X5oioGB_msk */}
                  {success && (
                    <span className="text-green-600 font-semibold">
                      Your message has been sent successfully!
                    </span>
                    )}
                  {error && (
                    <span className="text-red-600 font-semibold">
                      Something went wrong!
                    </span>
                  )}
                </div>
            </div>

            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                {/* <Rounded> */}

                    <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Submit
                    </button>

                {/* </Rounded> */}

            </div>

            </form>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  )
}
