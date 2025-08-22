import React, { useState } from "react";
import { ReviewCardSwiper } from "../../components/index.js";
import { team } from '../../assets/index.js';

const solutionsData = {
  "Advance Banking": {
    title: "Advance Banking",
    description:
      "Enhance your banking experience with innovative solutions that streamline operations and improve efficiency.",
    subTitle: "Optimize & Scale",
    subDescription:
      "Leverage modern banking solutions to drive growth and ensure seamless transactions.",
    image: team,
  },
  "Retirement Solutions": {
    title: "Retirement Solutions",
    description:
      "Plan your retirement with confidence using our expert-backed financial strategies.",
    subTitle: "Secure Your Future",
    subDescription:
      "Ensure financial stability with tailored retirement plans designed for long-term success.",
    image: team,
  },
  "Fraud & Protect": {
    title: "Fraud & Protect",
    description:
      "Upgrade to a seamless user experience that delivers a 360-degree view of household accounts for the advisor and client and supports more collaborative engagements.",
    subTitle: "Acquire, manage and grow",
    subDescription:
      "Drive value for investors and position yourself for growth with scalable, innovative wealth management solutions.",
    image: team,
  },
  "Risk & Compliance": {
    title: "Risk & Compliance",
    description:
      "Stay ahead of regulatory challenges with our comprehensive risk and compliance solutions.",
    subTitle: "Mitigate & Succeed",
    subDescription:
      "Effectively manage risk and ensure compliance with evolving regulations.",
    image: team,
  },
  "Wealth Management": {
    title: "Wealth Management",
    description:
      "Maximize your wealth potential with customized investment strategies and financial planning.",
    subTitle: "Grow Your Assets",
    subDescription:
      "Utilize innovative wealth management solutions to achieve financial success.",
    image: team,
  },
};

function OtherServices() {
  const [selectedSolution, setSelectedSolution] = useState("Fraud & Protect");
  return (
    <div>
      <div className="hero relative flex flex-col items-center bg-blue5 -mt-34">
        <span className="px-8 py-2 text-sm sm:text-base font-semibold bg-blue4 text-blue2 rounded-full mt-50">
          Our Service
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold text-black mt-4">
          Service We Provide
        </h1>
        <p className="mt-10 mb-30 text-xl sm:text-lg md:text-4xl font-medium text-textCor max-w-[90%] sm:max-w-3xl">
          Home / Service
        </p>
      </div>

      <div className="solutions relative flex flex-col items-center">
        <span className="px-8 py-2 text-sm sm:text-base font-semibold bg-blue5 text-blue2 rounded-full mt-20">
          Contact Info
        </span>
        <h2 className="text-2xl sm:text-5xl mt-8 font-bold text-black">
          Contact Information
        </h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:space-x-16 mb-10 text-lg sm:text-xl md:text-2xl font-medium mt-8 sm:mt-16">
          {Object.keys(solutionsData).map((solution) => (
            <button
              key={solution}
              onClick={() => setSelectedSolution(solution)}
              className={`hover:text-blue3 ${
                selectedSolution === solution ? "font-bold text-blue2" : ""
              }`}
            >
              {solution}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start bg-blue-90 p-6 rounded-lg w-full">
          <div className="md:w-1/2 p-6 ml-16 ">
            <h3 className="text-4xl font-semibold">
              {solutionsData[selectedSolution].title}
            </h3>
            <p className="text-textCor mt-5 text-lg">
              {solutionsData[selectedSolution].description}
            </p>
            <h4 className="text-2xl font-semibold mt-10">
              {solutionsData[selectedSolution].subTitle}
            </h4>
            <p className="text-textCor mt-5 text-lg">
              {solutionsData[selectedSolution].subDescription}
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center p-6">
            <img
              src={solutionsData[selectedSolution].image}
              alt={solutionsData[selectedSolution].title}
              className="rounded-lg shadow-md max-w-full"
            />
          </div>
        </div>
      </div>

      <div className="testimonials">
        <ReviewCardSwiper />
      </div>
    </div>
  );
}

export default OtherServices;
