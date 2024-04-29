import React, { useState } from "react";
import dictionaryImg from "../assets/dictionary.png";
import wordgameImg from "../assets/wordgame.png";
import jokesgeneratorImg from "../assets/jokesgenerator.png"
import glassmorphicImg from "../assets/glassmorphicsignup.png"
import colorswitcherImg from "../assets/colorswitcher.png"

const portfolio = () => {
  const [portfolio, setPortfolio] = useState([
    {
      id: 1,
      title: "Dictionary Application",
      link: "https://diictionary.netlify.app/",
      imgLink: dictionaryImg,
      contentTitle: "Dictionary Application",
      contentDescription: "This app have been created using simple HTML, CSS And JavaScript",
    },
    {
      id: 2,
      title: "Word Guessing Game Application",
      link: "https://rohitkrbhardwaj09.github.io/Word-guessing-game/",
      imgLink: wordgameImg,
      contentTitle: "Word Guessing Game",
      contentDescription: "This app have been created using simple HTML, CSS And JavaScript",
    },
    {
      id: 3,
      title: "Random Jokes Generator Application",
      link: "https://random-jokesss.netlify.app/",
      imgLink: jokesgeneratorImg,
      contentTitle: "Jokes Generator Application",
      contentDescription: "This app have been created using simple HTML, CSS And JavaScript",
    },
    {
      id: 4,
      title: "Glassmorphic Signup Page",
      link: "https://rohitkrbhardwaj09.github.io/Glass-morphic-Signup-Page/",
      imgLink: glassmorphicImg,
      contentTitle: "Glassmorphic Signup Page",
      contentDescription: "This app have been created using simple HTML, CSS And JavaScript",
    },
    {
      id: 5,
      title: "Color Theme Switcher",
      link: "https://rohitkrbhardwaj09.github.io/Background-Changer/",
      imgLink: colorswitcherImg,
      contentTitle: "Color Theme Switcher",
      contentDescription: "This app have been created using simple HTML, CSS And JavaScript",
    }
  ]);
  return (
    <div className="portfolio py-8 bg-[var(--base-color)]">
      <h2
        className="pt-6 w-full text-center text-6xl uppercase font-semibold text-[var(--secondary-color)]"
        data-aos="fade-down"
      >
        Portfolio
      </h2>

      <div className="grid mx-8 md:mx-20 md:grid-flow-row md:grid-cols-3  justify-items-center gap-8 mt-12" >
        {portfolio.map((project) => (
          <div className="container shadow-[-0.5px_-0.5px_5px_var(--secondary-color)] rounded-2xl">
            <h3 className="text-center text-[var(--grayish-color)]">{project.title}</h3>
            <div className="content">
              <a href={project.link} target="_blank">
                <div className="content-overlay"></div>
                <img className="content-image" src={project.imgLink} alt="" />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">{project.contentTitle}</h3>
                  <p className="content-text">{project.contentDescription}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default portfolio;
