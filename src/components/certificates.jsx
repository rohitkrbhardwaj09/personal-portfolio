import React, { useState } from "react";
import reactImg from "../assets/reactnodejs.jpg"
import AIImg from "../assets/AI.jpg"
import ModernJSImg from "../assets/ModernJavaScript.jpg"
import JSImg from "../assets/JS.jpg"
import JqueryImg from "../assets/jquery.jpg"
import CypressImg from "../assets/cypress.jpg"
import advancecypressImg from "../assets/advancecypress.jpg"

const certificates = () => {

    const [myCerfitificates, setMyCertificates] = useState([
        {
            id: 1,
            certificateTitle: "Full Stack Development with React & Node JS",
            certificateImg: reactImg,
            certificateLink: "https://media.geeksforgeeks.org/courses/certificates/5b612f76f1b4a2f5f8410249646cad35.pdf",
            certificateDescription: "Mastered Full Stack Dev in just 10 weeks with React & Node JS! (Click here to verify)."
        },
        {
            id: 2,
            certificateTitle: "Ethics in the Age of Generative AI",
            certificateImg: AIImg,
            certificateLink: "#",
            certificateDescription: "Empowered with insights on Ethics in Generative AI – ready to navigate the digital landscape responsibly."
        },
        {
            id: 3,
            certificateTitle: "Modern JavaScript for ReactJS - ES6[2023]",
            certificateImg: ModernJSImg,
            certificateLink: "https://www.udemy.com/certificate/UC-d743b041-0d5a-41dd-b3cd-daf4f0b9f8b9/",
            certificateDescription: "Mastered Modern JavaScript for ReactJS - ES6 [2023]! Ready to build dynamic web applications with cutting-edge techniques (Click here to Verify)."
        },
        {
            id: 4,
            certificateTitle: "The Complete JavaScript Course",
            certificateImg: JSImg,
            certificateLink: "https://www.udemy.com/certificate/UC-0046f808-c882-4337-b5df-2b4368a80264/",
            certificateDescription: "Just completed 'The Complete JavaScript Course: From Zero to Expert'! Ready to tackle any coding challenge with confidence 💻🚀 (Click here to Verify)."
        },
        {
            id: 5,
            certificateTitle: "JQuery - Complete JQuery Course",
            certificateImg: JqueryImg,
            certificateLink: "https://www.udemy.com/certificate/UC-488ea61a-33c8-4010-ab85-e295c996ce8b/",
            certificateDescription: "Just wrapped up the Complete jQuery Course! Ready to add sleek, interactive features to my web projects effortlessly.💡 (Click here to Verify)."
        },
        {
            id: 6,
            certificateTitle: "EndtoEnd Testing - Cypress.io",
            certificateImg: CypressImg,
            certificateLink: "#",
            certificateDescription: "🤩 Excited to share my latest achievement: Officially certified in Cypress.io! 🌲💻 Proud to demonstrate my proficiency in this powerful testing tool and ready to leverage it for robust software_testing."
        },
        {
            id: 7,
            certificateTitle: "Advance Cypress.io",
            certificateImg: advancecypressImg,
            certificateLink: "#",
            certificateDescription: "Leveling up! 🚀 Thrilled to have achieved Advanced Cypress Certification By LambdaTest, unlocking new possibilities in software testing and automation. Ready to tackle complex challenges with confidence and precision."
        },
    ]);

    return (
    <>
        <div className="certificate py-8 bg-[var(--base-color)]">
            <h2 className="pt-6 w-full text-center text-5xl uppercase font-semibold text-[var(--secondary-color)]" data-aos="fade-down">Certifications</h2>

            <div className="grid mx-8 md:mx-20 md:grid-flow-row md:grid-cols-3  justify-items-center gap-8 mt-12">
                {myCerfitificates.map((certificate) => (
                    <div className="container shadow-[-0.5px_-0.5px_5px_var(--secondary-color)]">
                        <h3 className="text-center text-[var(--grayish-color)]">{certificate.certificateTitle}</h3>
                        <div className="content">
                            <a href={certificate.certificateLink} target="_blank">
                                <div className="content-overlay"></div>
                                <img className="content-image" src={certificate.certificateImg} alt="" />
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">{certificate.certificateTitle}</h3>
                                    <p className="content-text">{certificate.certificateDescription}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
)};

export default certificates;
