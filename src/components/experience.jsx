import React from "react";

const experience = () => {
  return (
    <>
      <div className="experience grid  md:grid-cols-2 gap-10 place-content-center md:px-20 px-8 bg-[var(--base-color)] text-[var(--secondary-color)] py-12 p-4">
        <div className="md:order-last">
          <h1 className="text-center text-5xl font-bold uppercase" data-aos="fade-down">
            Experience
          </h1>
          <div className="border-2 p-8 text-justify mt-6  rounded-3xl shadow-[-0.5px_-0.5px_5px_var(--secondary-color)]" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="500">
            <p>
              <span className="text-[var(--primary-color)] font-semibold">Project</span> :
              Google Apparel ML_VOVO (Domain- E-Commerce)
            </p>
            <p>
              <span className="text-[var(--primary-color)] font-semibold">Company</span> :
              GlobalLogic Technologies Pvt Ltd.
            </p>
            <p>
              <span className="text-[var(--primary-color)] font-semibold">Duration</span> :
              Duration: Feb-2023 to Current
            </p>
            <p>
              <span className="text-[var(--primary-color)] font-semibold">Description</span>{" "}
              : The 'Google Apparel ML VOVO' project revolutionizes online
              clothing shopping with personalized experiences. Google redefines
              online fashion retail, elevating satisfaction and market growth.
            </p>
            <ul className="list-disc">
              <li>
                Responsible for automating end –to-end scenario for sanity and
                regression testing.
              </li>
              <li>
                Involved in all types of Sprint planning, Sprint review and
                daily Stand-up.
              </li>
              <li>
                Reviewing the automated scripts to make sure all the test
                scenarios are covered.
              </li>
              <li>Responsible for writing scripts and maintenance.</li>
            </ul>
          </div>
          <div className="border-2 p-8 text-justify mt-6  rounded-3xl shadow-[-0.5px_-0.5px_5px_var(--secondary-color)]" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="500">
            <p>
              <span className="text-[var(--primary-color)] font-semibold">Project</span> :
              Audio Video Media Services (Domain- Media)
            </p>
            <p>
              <span className="text-[var(--primary-color)] font-semibold">Company</span> :
              GlobalLogic Technologies Pvt Ltd.
            </p>
            <p>
              <span className="text-[var(--primary-color)] font-semibold">Duration</span> :
              Duration: Feb-2021 to Jan-2023
            </p>
            <p>
              <span className="text-[var(--primary-color)] font-semibold">Description</span>{" "}
              : AVMS verifies government-issued IDs on platforms like YouTube,
              enabling access to restricted content. This enhances platform
              security and compliance, preventing fraud and ensuring a safe
              environment.
            </p>
            <ul className="list-disc">
              <li>
                Reviewed the application from the end user's perspective and
                contributed to the design of the Test Plan, Test Scenarios, and
                Test Data preparation.
              </li>
              <li>Designed, developed, and executed test cases.</li>
              <li>
                Participated in Functional Testing, Integration Testing,
                Re-testing, and Regression Testing.
              </li>
              <li>
                Reported defects in Quality Center for the testing application.
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <h1 className="text-center text-5xl uppercase font-bold mt-5 md:mt-0" data-aos="fade-down">Education</h1>
          <div className="border-2 p-5 text-justify my-6  rounded-3xl shadow-[-0.5px_-0.5px_5px_var(--secondary-color)]" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500">

            <p><span className="text-[var(--primary-color)] font-semibold">-</span> Dr. APJ Abdul Kalam Technical University, Lucknow</p>
            <p>- <span className="text-[var(--primary-color)] font-semibold">2017-2020</span></p>
            <p><span className="text-[var(--primary-color)] font-semibold">-</span>Masters in Computer Application</p>
          </div>
          <div className="border-2 p-5 text-justify my-8  rounded-3xl shadow-[-0.5px_-0.5px_5px_var(--secondary-color)]" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500">
            <p><span className="text-[var(--primary-color)] font-semibold">-</span> Dr. Virendra Swarup Institute of Computer Studies, Saket, Kanpur</p>
            <p>- <span className="text-[var(--primary-color)] font-semibold">2014-2017</span></p>
            <p><span className="text-[var(--primary-color)] font-semibold">-</span>Bachelor in Computer Application</p>
          </div>
          <div className="border-2 p-5 text-justify my-8  rounded-3xl shadow-[-0.5px_-0.5px_5px_var(--secondary-color)]" data-aos="fade-right" data-aos-offset="150" data-aos-easing="ease-in-sine" data-aos-duration="500">
            <p><span className="text-[var(--primary-color)] font-semibold">-</span> Govt. Ordinance Factory Inter Collage, Armapur estate, Kanpur</p>
            <p>- <span className="text-[var(--primary-color)] font-semibold">2013</span></p>
            <p><span className="text-[var(--primary-color)] font-semibold">-</span>12th standard</p>
          </div>
          <div className="border-2 p-5 text-justify my-8  rounded-3xl shadow-[-0.5px_-0.5px_5px_var(--secondary-color)]" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500">
            <p><span className="text-[var(--primary-color)] font-semibold">-</span> Govt. Ordinance Factory Inter Collage, Armapur estate, Kanpur</p>
            <p>- <span className="text-[var(--primary-color)] font-semibold">2011</span></p>
            <p><span className="text-[var(--primary-color)] font-semibold">-</span>10th standard</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default experience;
