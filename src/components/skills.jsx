import { useState } from "react";
import HTMLICO from "../assets/html.svg";
import CSSICO from "../assets/css.svg";
import JSICO from "../assets/javascript.svg";
import REACTJSICO from "../assets/reactjs.svg";
import TailwindCSSICO from "../assets/tailwindcss.svg";
import JavaICO from "../assets/java.svg";
import ServletICO from "../assets/servlets.png";
import JSPICO from "../assets/jsp.svg";
import JDBCICO from "../assets/database.svg";
import MYSQLICO from "../assets/mysql.svg";
import CypressICO from "../assets/cypress.svg"
import SeleniumICO from "../assets/selenium.svg"
import ManualTestingICO from "../assets/testing.png";
import JiraICO from "../assets/jira.svg"
import JenkinsICO from "../assets/jenkins.svg";
import AgileICO from "../assets/agile.png"
import GitICO from "../assets/Git.svg"
import GithubICO from "../assets/github.svg"
import FigmaICO from "../assets/figma.svg"

const Skill = () => {
  const [frontendSkills, setFrontendSkills] = useState([
    {
      id: 1,
      title: "HTML",
      iconName: HTMLICO,
    },
    {
      id: 2,
      title: "CSS",
      iconName: CSSICO,
    },
    {
      id: 3,
      title: "JavaScript",
      iconName: JSICO,
    },
    {
      id: 4,
      title: "React JS",
      iconName: REACTJSICO,
    },
    {
      id: 5,
      title: "TailwindCSS",
      iconName: TailwindCSSICO,
    },
  ]);

  const [backendSkills, setBackendSkills] = useState([
    {
      id: 1,
      title: "Core Java",
      iconName: JavaICO,
    },
    {
      id: 2,
      title: "Servlet",
      iconName: ServletICO,
    },
    {
      id: 3,
      title: "JSP",
      iconName: JSPICO,
    },
    {
      id: 4,
      title: "JDBC",
      iconName: JDBCICO,
    },
    {
      id: 5,
      title: "MySQL",
      iconName: MYSQLICO,
    },
  ]);

  const [qaSkills, setQASkills] = useState([
    {
      id: 1,
      title: "Cypress",
      iconName: CypressICO,
    },
    {
      id: 2,
      title: "Selenium",
      iconName: SeleniumICO,
    },
    {
      id: 3,
      title: "Manual Testing",
      iconName: ManualTestingICO,
    },
    {
      id: 4,
      title: "Jira",
      iconName: JiraICO,
    },
    {
      id: 5,
      title: "Agile",
      iconName: AgileICO,
    },
    {
      id: 6,
      title: "Jenkins",
      iconName: JenkinsICO,
    },
  ]);
  const [otherSkills, setOtherSkills] = useState([
    {
      id: 1,
      title: "Git",
      iconName: GitICO,
    },
    {
      id: 2,
      title: "Github",
      iconName: GithubICO,
    },
    {
      id: 3,
      title: "Figma",
      iconName: FigmaICO,
    },
  ]);

  return (
    <>
      <div className="skills bg-[var(--base-color)]">
        <h2 className="pt-6 w-full text-center text-7xl uppercase font-semibold text-[var(--secondary-color)]" data-aos="fade-down">
          My Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-12 md:mx-32 mx-8 py-10 text-[var(--secondary-color)] bg-[var(--base-color)] -z-10">
          <div className="p-4 border-2 border-[var(--grayish-color)] rounded-3xl shadow-[-0.5px_-0.5px_20px_var(--secondary-color)]"  data-aos="fade-right">
            <div className="grid text-center text-2xl md:text-3xl text-[var(--primary-color)]">
              <i class="fas fa-3x fa-laptop-code"></i>
              Frontend
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-2 justify-items-center my-8">
              {frontendSkills.map((skill) => (
                <div className="grid text-center text-md">
                  <div className="w-20 h-20 p-3 rounded-full transition hover:-translate-y-1">
                  <img
                    src={skill.iconName}
                    alt=""
                    className="object-scale-down"
                  />
                  </div>
                  <span className="text-[var(--secondary-color)] font-mono tracking-wide">{skill.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border-2 border-[var(--grayish-color)] rounded-3xl shadow-[-0.5px_-0.5px_20px_var(--secondary-color)]" data-aos="fade-left">
            <div className="grid text-center md:text-3xl text-2xl text-[var(--primary-color)]">
              <i class="fa-solid fa-3x fa-diagram-project"></i>
              Backend
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-2 justify-items-center my-8">
              {backendSkills.map((backendSkill) => (
                <div className="grid text-center text-md">
                  <div className="w-20 h-20 p-3 rounded-full transition hover:-translate-y-1">
                  <img
                    src={backendSkill.iconName}
                    alt=""
                  />
                  </div>
                  <span className="text-[var(--secondary-color)] font-mono tracking-wide">{backendSkill.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border-2 border-[var(--grayish-color)] rounded-3xl shadow-[-0.5px_-0.5px_20px_var(--secondary-color)]" data-aos="fade-right">
            <div className="grid text-center text-2xl md:text-3xl text-[var(--primary-color)]">
              <i class="fa-solid fa-3x fa-bug"></i>
              Quality Assurance (QA)
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-2 justify-items-center my-8">
              
              {qaSkills.map((qaSkill) => (
                <div className="grid text-center text-md">
                <div className="w-20 h-20 p-3 rounded-full transition hover:-translate-y-1">
                  <img
                    src={qaSkill.iconName}
                    alt=""
                  />
                  </div>
                <span className="text-[var(--secondary-color)] font-mono tracking-wide">{qaSkill.title}</span>
              </div>
              ))}
            </div>
          </div>

          <div className="p-4 border-2 border-[var(--grayish-color)] rounded-3xl shadow-[-0.5px_-0.5px_20px_var(--secondary-color)]" data-aos="fade-left">
            <div className="grid text-center text-2xl md:text-3xl text-[var(--primary-color)]">
              <i class="fas fa-file-code fa-3x"></i>
              Others
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-2 justify-items-center my-8">
              
              {otherSkills.map((otherskill) => (
                <div className="grid text-center text-md">
                <div className="w-20 h-20 p-3 rounded-full transition hover:-translate-y-1">
                  <img
                    src={otherskill.iconName}
                    alt=""
                  />
                  </div>
                  <span className="text-[var(--secondary-color)] font-mono tracking-wide">{otherskill.title}</span>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
