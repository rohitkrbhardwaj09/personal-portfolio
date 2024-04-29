import bannerImage from "../assets/RohitBhardwaj.png";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
const banner = () => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "UI/UX Developer",
        "Web Developer",
        "Backend Developer",
        "Manual Tester",
        "Automation Tester",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      // smartBackspace: true,
      loop: true,
      // showCursor: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      style={{}}
      className="home box w-full pb-6 grid gap-8 md:grid-cols-2 md:items-center md:text-left bg-[var(--base-color)] text-[var(--secondary-color)] pt-10 z-50"
    >
      <div
        className="p-12 sm:p-20 lg:p-12 mt-5 flex justify-center"
        data-aos="fade-right"
      >
        <img
          className="md:w-4/5 w-5/5 md:mt-6 rounded-full shadow-[-0.5px_-0.5px_20px_var(--secondary-color)]"
          src={bannerImage}
          alt="banner img"
        />
      </div>
      <div
        className="w-full md:pr-10 px-6 flex justify-center"
        data-aos="fade-left"
        data-aos-offset="100"
      >
        <div className="space-y-3">
          <h3 className=" text-2xl font-semibold">
            Hi <span className="animate-[wave_5s_ease-in-out_2]">👋🏻 </span>, I'm{" "}
          </h3>
          <h1 className=" text-3xl font-bold">
            Rohit Kr. <b>Bhardwaj</b>
          </h1>
          <h2 className=" text-2xl">
            And I'm{" "}
            <span className="text-[var(--primary-color)]" ref={el}></span>
          </h2>
          <p className=" text-justify">
            Self-driven, quick starter, passionate programmer with a curious
            mind who enjoys solving a complex and challenging real-world
            problems.
          </p>

          <div className="icons-container flex space-x-5 justify-center md:justify-center pt-6">
            <a
              href=""
              className="hover:bg-[var(--base-color)] hover:text-[var(--primary-color)] hover:border h-16 w-16 bg-[var(--primary-color)] rounded-full flex justify-center items-center"
            >
              <a href="https://www.linkedin.com/in/rohitkrbhardwaj96/">
                <i class="text-4xl fa-brands fa-linkedin-in"></i>
              </a>
            </a>
            <a
              href=""
              className="hover:bg-[var(--base-color)] hover:text-[var(--primary-color)] hover:border h-16 w-16 bg-[var(--primary-color)] rounded-full flex justify-center items-center"
            >
              <a href="https://github.com/rohitkrbhardwaj09">
                <i class="text-4xl fa-brands fa-github"></i>
              </a>
            </a>
            <a
              href=""
              className="hover:bg-[var(--base-color)] hover:text-[var(--primary-color)] hover:border h-16 w-16 bg-[var(--primary-color)] rounded-full flex justify-center items-center"
            >
              <a href="https://wa.me/9044086978">
                <i class="text-4xl fa-brands fa-whatsapp"></i>
              </a>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default banner;
