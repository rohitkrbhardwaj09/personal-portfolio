import React from "react";
import Button from "./button";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const contactme = () => {
  const successNotify = () => {
    toast.success("Email sent successfully!",{
      position:"bottom-right",
    })
  };
  const errorNotify = () => {
    toast.error("Oops! Something went wrong",{
      position:"bottom-right",
    })
  };


  function sendMail() {
    var params = {
      fname: document.getElementById("firstname").value,
      lname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    if (
      params.email !== "" &&
      params.fname !== "" &&
      params.lname !== "" &&
      params.message !== ""
    ) {
      const serviceID = "service_3xtm33k";
      const templateID = "template_w6b3ews";
  
      emailjs
        .send(serviceID, templateID, params)
        .then(
          (response) => {
          document.getElementById("firstname").value = "";
          document.getElementById("lastname").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          
  
          if(response.status >= 200 && response.status < 300){
            successNotify();
          }
          else{
            errorNotify();
          }
        })
    }else{
      errorNotify();
    }
  }

  return (
    <>
      <div className="contactme bg-[var(--base-color)] text-[var(--secondary-color)] py-16 text-center">
        <h1
          className="text-center text-5xl font-bold uppercase"
          data-aos="fade-down"
        >
          Contact Me
        </h1>
        <p className="my-5">
          Please don't hesitate to reach out by filling out the form below. I'll
          respond to your message promptly.
        </p>
        {/* -------------------------------name----------------------- */}
        <div className=" grid p-2 py-4 md:px-80 px-8">
          <div className="grid md:grid-cols-2 gap-2">
            <div className="" data-aos="fade-right">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-[var(--secondary-color)]"
              >
                <span className="text-[var(--primary-color)] text-lg">
                  First Name
                </span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required
                  name="first-name"
                  id="firstname"
                  className="block w-full rounded-md border-0 pl-2 py-1.5 text-[var(--grayish-color)] shadow-sm ring-1 ring-inset ring-[var(--grayish-color)] placeholder:text-[var(--grayish-color)]"
                />
              </div>
            </div>

            <div className="" data-aos="fade-left">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-[var(--secondary-color)]"
              >
                <span className="text-[var(--primary-color)] text-lg">
                  Last Name:{" "}
                </span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required
                  name="last-name"
                  id="lastname"
                  className="block w-full rounded-md border-0 pl-2 py-1.5 text-[var(--grayish-color)] shadow-sm ring-1 ring-inset ring-[var(--grayish-color)] placeholder:text-[var(--grayish-color)]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* -------------------------------email----------------------------- */}
        <div className="md:px-80 px-8">
          <div className="" data-aos="fade-right">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--secondary-color)]"
            >
              <span className="text-[var(--primary-color)] text-lg">
                Email ID:
              </span>
            </label>
            <div className="mt-2">
              <input
                type="email"
                required
                name="email"
                id="email"
                className="block w-full rounded-md border-0 pl-2 py-1.5 text-[var(--grayish-color)] shadow-sm ring-1 ring-inset ring-[var(--grayish-color)] placeholder:text-[var(--grayish-color)]"
              />
            </div>
          </div>
        </div>

        {/* ---------------------------------message-------------- */}
        <div className="py-3 md:px-80 px-8">
          <div className="" data-aos="fade-left">
            <label
              htmlFor="msg"
              className="block text-sm font-medium text-[var(--secondary-color)]"
            >
              <span className="text-[var(--primary-color)] text-lg">
                Write your message
              </span>
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                required
                name="msg"
                rows="3"
                className="block w-full h-32 rounded-md border-0 pl-2 py-1.5 text-[var(--grayish-color)] shadow-sm ring-1 ring-inset ring-[var(--grayish-color)] placeholder:text-[var(--grayish-color)]"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button>
            <button onClick={() => sendMail()}>Send Message</button>
          </Button>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default contactme;
