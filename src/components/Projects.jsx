import imgcard from "../assets/tabinfo.png";
import mubeat from "../assets/mubeat1.png";
import flashlearn from "../assets/flashlearn1.png";
import lakbay from "../assets/LakbayTugon.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Projects = () => {
  return (
    <>
      <div
        className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto"
        id="projects"
      >
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:w-1/4"
          >
            <h3 className="text-5xl text-primary font-bold lg:w-1/2 mb-3 text-color-primary">
              My Projects
            </h3>
            <p className="text-base text-color-tartiary md:w-64 text-justify">
              I highlight projects in which I use Dart or PHP. These projects
              show off my knowledge of these languages and my capacity to
              develop systems and application.
            </p>
          </motion.div>
          {/* card project1 */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-full lg:w-3/4"
          >
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
              <button
                data-modal-target="default-modal-project1"
                data-modal-toggle="default-modal-project1"
              >
                <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center item-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                  <div>
                    <div className="flex justify-center">
                      <img
                        src={mubeat}
                        alt=""
                        className="h-60 rounded-[18px]"
                      />
                    </div>
                    <h5 className="text-2xl font-semibold text-color-primary px-5 mt-6 text-center">
                      Mubeat—music explorer
                    </h5>
                  </div>
                </div>
              </button>

              {/* <!-- Main modal --> */}
              <div
                id="default-modal-project1"
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
                        Mubeat—music explorer
                      </h3>
                      <button
                        type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="default-modal-project1"
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
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                        Rationale:
                      </p>
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                        Today, music has a significant impact to people’s lives.
                        We sometimes feel as though “no one understands us” and
                        a lot of people connects with others and express
                        themselves through music. Music explorer application
                        will help users to easily find their ideal choice of
                        band or musician (local or international) that suits
                        their musical preferences. The application also let the
                        users get to know the artists' more by offering artist's
                        information, their tracks and albums.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
                <button
                  data-modal-target="default-modal-project2"
                  data-modal-toggle="default-modal-project2"
                >
                  <div>
                    <div className="flex justify-center">
                      <img
                        src={flashlearn}
                        alt=""
                        className="h-60 rounded-[18px]"
                      />
                    </div>
                    <h5 className="text-2xl font-semibold text-color-primary px-5 mt-6 text-center">
                      Flashlearn
                    </h5>
                  </div>
                </button>
              </div>
              {/* <!-- Main modal --> */}
              <div
                id="default-modal-project2"
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
                        FlashLearn Mobile App
                      </h3>
                      <button
                        type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="default-modal-project2"
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
                        Rationale:
                      </p>
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                        Every student encounter difficulty when it comes to
                        studying, especially when they have a lot of modules to
                        review for their quizzes and exams. The amount of
                        information can make the studying process overwhelming
                        and can lead to a feeling of frustration and difficulty
                        in retaining the information. In such situations,
                        FlashLearn will provide a structured and organized
                        approach to studying by simplifying key information into
                        brief and understandable snippets, it also allows the
                        student to tackle their notes systematically, focusing
                        on one flashcard at a time. As an added functionality,
                        the FlashLearn application incorporates a QR code
                        feature, when students scan the QR code they will be
                        directed to the specific module set that their
                        instructor has created for them to review.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                <button
                  data-modal-target="default-modal-project3"
                  data-modal-toggle="default-modal-project3"
                >
                  <div>
                    <div className="flex justify-center">
                      <img
                        src={lakbay}
                        alt=""
                        className="h-60 rounded-[18px]"
                      />
                    </div>
                    <h5 className="text-2xl font-semibold text-color-primary px-5 mt-6 text-center">
                      LakbayTugon
                    </h5>
                  </div>
                </button>
              </div>
              {/* <!-- Main modal --> */}
              <div
                id="default-modal-project3"
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
                        LakbayTugon Web Application
                      </h3>
                      <button
                        type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="default-modal-project3"
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
                        Rationale:
                      </p>
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                        "LakbayTugon" serves as an essential online tool
                        addressing the pressing need for thorough weather and
                        disaster management assistance. It provides weather
                        information, detailed hazard data, and a comprehensive
                        emergency contact list, enabling users to prepare for,
                        respond to, and recover from various crises efficiently.
                        Through interactive community features, the platform
                        encourages collaboration and mutual support, bolstering
                        overall resilience.
                      </p>
                    </div>
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

export default Projects;
