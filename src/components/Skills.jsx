import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Skills = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "PHP",
      //   monthlyPrice: 19,
      //   yearlyPrice: 199,
      description:
        "An open-source, server-side programming language that can be used to create websites, applications, customer relationship management systems.",
      skillimg: "/src/assets/skill1.png",
      green: "/src/assets/greencir.png",
    },
    {
      name: "React & Tailwind",
      monthlyPrice: 19,
      yearlyPrice: 199,
      description:
        "Tailwind is a CSS framework that allows you to create modern, and responsive web designs. When combined with React, a JavaScript library for building user interfaces, you can create dynamic web applications.",
      skillimg: "/src/assets/skill2.gif",
      green: "/src/assets/greencir.png",
    },
    {
      name: "Flutter Dart",
      monthlyPrice: 19,
      yearlyPrice: 199,
      description:
        "Dart is used to build high-performance mobile or web application. Flutter is for UI SDK specifically designed for building high performance, cross-platform mobile apps.",
      skillimg: "/src/assets/skill3.png",
      green: "/src/assets/greencir.png",
    },
  ];

  return (
    <>
      <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="skill">
        <div className="text-center">
          <h2 className="md:text-5xl text-3xl font-extrabold text-color-primary">
            Skills
          </h2>
          <p className="text-color-tartiary md:w-1/3 mx-auto px-4">
            I continuously improve my web development skills and other
            Programming Languages.
          </p>

          {/* toogle pricing */}
          {/* <div className="mt-16">
            <label
              htmlFor="toggle"
              className="inline-flex items-center cursor-pointer"
            >
              <span className="mr-8 text-2xl font-semibold">Monthly</span>
              <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
                <div
                  className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${
                    isYearly ? "bg-color-primary ml-8" : "bg-gray-500"
                  }`}
                ></div>
              </div>
              <span className="ml-8 text-2xl font-semibold">Yearly</span>
            </label>
            <input
              type="checkbox"
              id="toggle"
              className="hidden"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
          </div> */}
        </div>

        {/* Pricing cards */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mt-20 md:w-11/12 mx-auto"
        >
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl"
            >
              <h3 className="text-3xl font-bold text-center text-color-primary">
                {pkg.name}
              </h3>
              <p className="text-color-tartiary text-center my-5">
                {pkg.description}
              </p>
              {/* <p className="mt-5 text-center text-color-secondary text-4xl font-bold">
                {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}{" "}
                <span className="text-base text-color-tartiary font-meduim">
                  /{isYearly ? "year" : "month"}
                </span>
              </p> */}
              <div className="mt-4 space-y-2 px-4">
                <img src={pkg.skillimg} alt="" className="max-w-1/3" />
              </div>
              {/* <ul className="mt-4 space-y-2 px-4">
                <li className="flex gap-3 items-center">
                  <img src={pkg.green} alt="" className="w-4 h-4" />
                  Videos of Lesson
                </li>
                <li className="flex gap-3 items-center">
                  <img src={pkg.green} alt="" className="w-4 h-4" />
                  Videos of Lesson
                </li>
                <li className="flex gap-3 items-center">
                  <img src={pkg.green} alt="" className="w-4 h-4" />
                  Videos of Lesson
                </li>
                <li className="flex gap-3 items-center">
                  <img src={pkg.green} alt="" className="w-4 h-4" />
                  Videos of Lesson
                </li>
                <li className="flex gap-3 items-center">
                  <img src={pkg.green} alt="" className="w-4 h-4" />
                  Videos of Lesson
                </li>
              </ul>
              <div className="w-full mx-auto mt-8 flex items-center justify-center">
                <button className="btnPrimary">Get Started</button>
              </div> */}
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
