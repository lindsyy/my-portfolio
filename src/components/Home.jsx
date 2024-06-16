import bannergid from "../assets/gif-blue.gif";
// import Banner from "../shared/Banner";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-28" id="home">
        <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
          <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
            {/* banner image */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <img src={bannergid} alt="loading..." className="lg:h-[386px]" />
            </motion.div>
            {/* banner content */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="md:w-3/5"
            >
              <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
                HI! I'm Lindsay B. Serdeniola
              </h2>
              <p className="text-[#EBEBEB] text-2xl mb-8 text-justify">
                Fullsuite Software Engineer Intern.
              </p>
              <div className="space-x-0 md:space-x-5 space-y-4">
                <button className="btnPrimary" id="about">
                  <Link to="about">Get Started</Link>
                </button>
                <button className="btnPrimary">
                  <a href="/src/assets/SerdeniolaCV.pdf" target="_blank">
                    Print Resume
                  </a>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-28" id="home">
        <Banner
          banner={bannergid}
          heading="HI! I'm Lindsay B. Serdeiola"
          subheading={"Fullsuite Software Engineer Intern."}
          btn1={"Get Started"}
          btn2={"Print Resume"}
        />
      </div> */}
    </>
  );
};

export default Home;
