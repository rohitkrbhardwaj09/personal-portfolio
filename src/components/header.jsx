import { useEffect, useState } from "react";
import Button from "./button";
import { Link } from "react-scroll";
import themeImg from "../assets/themeImg.png"

const header = () => {
  const [brandName, setBrandName] = useState("Rohit Kr. Bhardwaj");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      pagelink: "home",
      id: 1,
    },
    {
      title: "About",
      pagelink: "aboutme",
      id: 2,
    },
    {
      title: "Skills",
      pagelink: "skills",
      id: 3,
    },
    {
      title: "Experience",
      pagelink: "experience",
      id: 4,
    },
    {
      title: "Portfolio",
      pagelink: "portfolio",
      id: 5,
    },
    {
      title: "Certificates",
      pagelink: "certificate",
      id: 6,
    },
    {
      title: "Contact",
      pagelink: "contactme",
      id: 7,
    },
  ]);

  let [open, setOpen] = useState(false);

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "src/assets/RohitKumar.pdf"; // Change to the path of your resume file
    downloadLink.download = "RohitKumar.pdf"; // Change the name if needed
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };


  //toggle code here
  const [theme, setTheme] = useState("dark-theme")
  const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");
  const toggleTheme = () => {
    if(theme === "dark-theme"){
      setTheme('light-theme');
    }else{
      setTheme('dark-theme');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme])



  const myColorVariable = "var(--primary-color)";


  return (
    <div className="navbar shadow w-full fixed top-0 left-0 overflow-hidden">
      <div className="md:flex items-center justify-between py-4 md:py-2 bg-[var(--base-color)] text-[var(--secondary-color)] md:px-10 px-7">
        <div className="md:text-2xl  text-md text-[var(--primary-color)] font-bold">
          <a
            href=""
            className="px-3 py-2 border-4 border-[var(--primary-color)]"
          >
            Rohit Kr. Bhardwaj
          </a>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden"
        >
          <i
            className="text-[var(--primary-color)]"
            class={open ? "fa-solid fa-square-xmark" : "fa-solid fa-bars"}
            style={{ color: myColorVariable }}
          ></i>
        </div>

        

        <ul
          className={`md:flex cursor-pointer  text-center md:items-center md:pb-0 pb-12 absolute md:static bg-[var(--base-color)]  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in backdrop-filter backdrop-blur-md backdrop-saturate-180 bg-opacity-75 rounded-lg ${
            open ? "top-14" : "top-[-490px]"
          }`}
        >
          {menuLinks.map((links) => (
            <li
              key={links.title}
              className="md:ml-5 font-mono text-md tracking-wider md:my-0 py-4 transition relative"
            >
              <Link
                className=""
                activeClass="active"
                to={links.pagelink}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {links.title}
              </Link>
            </li>
          ))}

          <button id="toggle-theme" className="md:ml-5 text-2xl" onClick={() => toggleTheme()}>
            <img src={themeImg} alt="img"  />
          </button>
          <br />
          <Button>
            <button onClick={handleDownload}>Download CV</button>
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default header;
