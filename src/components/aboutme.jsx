import { useState } from "react";
import ImgAboutMe from "../assets/Rohit_contactus.png";
const aboutUs = () => {
  const [data, setData] = useState({
    image: ImgAboutMe,
    title: "Know About Me!",
    desc1: `I am proud to have a unique background that combines UI/UX Developer, Fullstack Developer, Manual as wel as Cypress Automation Tester. In my various roles, I have found myself regularly called upon to tackle technical challenges, resolve coding issues and engage with different teams working on different projects. My love of coding drives me internally and I relish every opportunity to tackle the deepest technical challenges. From developing a user-friendly frontend to building reliable web servers, I've worked on many projects. Also, have experience in end-to-end automation testing using Cypress Automation Technology.`,
    title2: "What I'm good at",
    actionButton: {
      title: "Know more...",
      link: "/remote",
    },
  });
  return (
    <>
      <div className="aboutme bg-[var(--base-color)] flex justify-center flex-wrap space-y-3 text-[var(--secondary-color)] pt-5 pb-10">
      <h2 className="pt-6 w-full text-center text-6xl uppercase font-semibold text-[var(--secondary-color)]" data-aos="fade-down">
          About me
        </h2>
        <p className="my-5 text-[var(--grayish-color)]">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>

        <div className="flex justify-center flex-col mx-8 md:flex-row-reverse">
          <div className="md:w-4/12 flex justify-center items-center" data-aos="fade-left">
            <img
              className="md:w-4/4 w-4/4 justify-center rounded-1xl border-2 border-[var[--grayish-color]] shadow-inner"
              src={ImgAboutMe}
              alt=""
            />
          </div>
          <div className="md:px-12 md:w-8/12 border-[var[--grayish-color]] text-justify font-mono pt-5" data-aos="fade-right">
            <h1 className="text-2xl font-semibold  text-[var(--primary-color)]">{data.title}</h1>
            <p>{data.desc1}</p>
            <h1 className="text-2xl font-semibold  text-[var(--primary-color)] mt-8">{data.title2}</h1>
            <ul className="list-none">
              <li>Bringing products to live</li>
              <li>Quirky designs</li>
              <li>Backend solutions</li>
              <li>End-to-End Cypress Automation</li>
              <li>Jenkins Integration</li>
              <li>Cucumber(.feature)</li>
            </ul>
            {/* <p>{data.desc2}</p> */}
            {/* <div className="text-center my-5 -z-10">
              <Button>{data.actionButton.title}</Button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default aboutUs;
