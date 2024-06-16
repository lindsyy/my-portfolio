import aboutperson1 from "../assets/person1.gif";
import aboutperson2 from "../assets/person-relax.gif";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-5/6"
          >
            <img src={aboutperson1} alt=" " />
          </motion.div>
          {/* about content */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-5/6"
          >
            <h2 className="md:text-5xl text-xl font-bold text-color-primary mb-5 leading-normal">
              Tech Enthusiast with a Passion for{" "}
              <span className="text-color-secondary">Design.</span>
            </h2>
            <p className="text-color-tartiary text-lg mb-7">
              As a college IT student, I have a strong interest in how
              programming languages intersect with UI/UX design, with a goal of
              creating impactful experiences that connect with users.
            </p>
            {/* <button className="btnPrimary">Read More</button> */}
            <button
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              className="btnPrimary"
              type="button"
            >
              Read More
            </button>
            {/* <!-- Main modal --> */}
            <div
              id="default-modal"
              tabindex="-1"
              aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative p-4 w-full max-w-2xl max-h-full">
                {/* <!-- Modal content --> */}
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* <!-- Modal header --> */}
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                      College Journey
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div class="p-4 md:p-5 space-y-4">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      In my journey as a college IT student, I find myself drawn
                      to the captivating world of programming languages,
                      particularly as they intersect with my passion for UI/UX
                      design. While I thoroughly enjoy the creative process of
                      designing user interfaces and experiences, I also
                      recognize the importance of understanding the technical
                      aspects of programming to bring these designs to life.
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      By learning various programming languages, I am not only
                      expanding my skill set but also enhancing my ability to
                      create intuitive and visually appealing designs that truly
                      resonate with users. This journey is not just about
                      mastering the tools of the trade; it's about crafting
                      meaningful experiences that make a difference.
                    </p>
                  </div>
                  {/* <!-- Modal footer --> */}
                  {/* <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="default-modal"
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      I accept
                    </button>
                    <button
                      data-modal-hide="default-modal"
                      type="button"
                      class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Decline
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2nd part */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-1/2"
          >
            <img src={aboutperson2} alt=" " className="md:pl-20" />
          </motion.div>
          {/* about content */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-3/5"
          >
            <h2 className="md:text-5xl text-xl font-bold text-color-primary mb-5 leading-normal">
              Finding joy in the simple moments,{" "}
              <span className="text-color-secondary">one day at a time.</span>
            </h2>
            <p className="text-color-tartiary text-lg mb-7">
              Every small achievement, every small step, adds up to something
              bigger. They are like pieces of a puzzle, each one important and
              worth acknowledging.
            </p>
            <button
              className="btnPrimary"
              data-modal-target="default-modal-about"
              data-modal-toggle="default-modal-about"
            >
              About Me
            </button>
            {/* <!-- Main modal --> */}
            <div
              id="default-modal-about"
              tabindex="-1"
              aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative p-4 w-full max-w-2xl max-h-full">
                {/* <!-- Modal content --> */}
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* <!-- Modal header --> */}
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                      Personal Information
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal-about"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div class="p-4 md:p-5 space-y-4">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      I'm a 22-year-old BSIT student at Pangasinan State
                      University Urdaneta Campus, where I'm pursuing my passion
                      for technology.
                    </p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      One of my favorite ways to relax is by gazing at the sky,
                      as it always brings me a sense of calm and peace.I enjoy
                      connecting with others by sharing their interests and I
                      also cherish my alone time, finding solace and in moments
                      spent by myself. In my leisure, you can often find me
                      watching K-dramas, where I indulge in captivating stories
                      and characters. I also have a deep love for reading books,
                      which allows me to explore new worlds and perspectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
