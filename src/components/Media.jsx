// import Banner from "../shared/Banner";
import person2 from "../assets/person2.gif";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import fb from "../assets/fbimg.png";
import ig from "../assets/igimg.png";
import twt from "../assets/twtimg.png";
import linked from "../assets/linkinimg.png";
const Media = () => {
  return (
    <>
      <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
        <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
          <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
            {/* banner image */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <img src={person2} alt="loading..." className="lg:h-[386px]" />
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
                Let's Stay Connected!!
              </h2>
              <p className="text-[#EBEBEB] text-2xl mb-12 text-justify">
                Connect with me through my official accounts.
              </p>
              <div className="space-x-5 space-y-4">
                <div className="flex items-center space-x-5">
                  <a href="https://www.facebook.com/lindsyy.s7" target="_blank">
                    <img
                      src={fb}
                      alt=""
                      className="w-8 cursor-pointer hover:translate-y-4 transition-all duration-300"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/__lily.sse/"
                    target="_blank"
                  >
                    <img
                      src={ig}
                      alt=""
                      className="w-8 cursor-pointer hover:translate-y-4 transition-all duration-300"
                    />
                  </a>
                  <a href="https://twitter.com/Ksj_hope" target="_blank">
                    <img
                      src={twt}
                      alt=""
                      className="w-8 cursor-pointer hover:translate-y-4 transition-all duration-300"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lindsay-serdeniola-256229277/"
                    target="_blank"
                  >
                    <img
                      src={linked}
                      alt=""
                      className="w-8 cursor-pointer hover:translate-y-4 transition-all duration-300"
                    />
                  </a>
                </div>
                {/* <button className="btnPrimary" id="about">
                  I have a Code
                </button>
                <button className="btnPrimary">Check out</button> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12"> */}
      {/* use banner and pass props */}
      {/* <Banner
          banner={person2}
          heading={"Lorem Ipsum has been the industry's"}
          subheading={
            "It is a long established fact that a reader will be distracted. It is a long established fact that a reader will be distracted"
          }
          btn1={"I have a Code"}
          btn2={"Check out"}
        />
      </div> */}
    </>
  );
};

export default Media;
