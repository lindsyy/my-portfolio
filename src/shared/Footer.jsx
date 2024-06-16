import fb from "../assets/fbimg.png";
import ig from "../assets/igimg.png";
import twt from "../assets/twtimg.png";
import linked from "../assets/linkinimg.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#010851] md:px-14 p-1 max-w-full mx-auto text-white">
        {/* <div className="my-12 flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 space-y-8">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-white"
            >
              LS Portfolio
            </a>
            <p className="md:w-1/2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              tempora expedita, dolorem porro eligendi aspernatur dolores iure.
              Aspernatur nesciunt voluptatum laboriosam repudiandae inventore
              deleniti? Aperiam nesciunt modi pariatur perspiciatis rem.
            </p>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
              />
              <input
                type="submit"
                value="Send"
                className="px-4 py-2 bg-color-secondary rounded-md ml-2 cursor-pointer hover:bg-white hover:text-color-primary duration-300 transition-all"
              />
            </div>
          </div> */}
        {/* Footer navigation */}
        {/* <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
            <div className="space-y-4 mt-5">
              <h4 className="text-xl">Platform</h4>
              <ul className="space-y3">
                <a href="/" className="block hover:text-gray-300">
                  Overview
                </a>
                <a href="/" className="block hover:text-gray-300">
                  Overview
                </a>
                <a href="/" className="block hover:text-gray-300">
                  Overview
                </a>
                <a href="/" className="block hover:text-gray-300">
                  Overview
                </a>
              </ul>
            </div>
            <div className="space-y-4 mt-5">
              <h4 className="text-xl">Platform</h4>
              <ul className="space-y3">
                <a href="/" className="block hover:text-gray-300">
                  Overview
                </a>
                <a href="/" className="block hover:text-gray-300">
                  Overview
                </a>
                <a href="/" className="block hover:text-gray-300">
                  Overview
                </a>
                <a href="/" className="block hover:text-gray-300">
                  Overview
                </a>
              </ul>
            </div>
            <div className="space-y-4 mt-5">
              <h4 className="text-xl">Platform</h4>
              <ul className="space-y3">
                <a href="/" className="block hover:text-gray-300">
                  Overview
                </a>
                <a href="/" className="block hover:text-gray-300">
                  Overview
                </a>
                <a href="/" className="block hover:text-gray-300">
                  Overview
                </a>
                <a href="/" className="block hover:text-gray-300">
                  Overview
                </a>
              </ul>
            </div>
          </div>
        </div>
        <hr /> */}
        <div className="flex items-center sm:flex-row sm:items-center justify-center my-8">
          <p>@ Lindsay Serdeniola ----2024. All right reserved.</p>

          {/* <div className="flex items-center space-x-5">
            <img
              src={fb}
              alt=""
              className="w-8 cursor-pointer hover:translate-y-4 transition-all duration-300"
            />
            <img
              src={ig}
              alt=""
              className="w-8 cursor-pointer hover:translate-y-4 transition-all duration-300"
            />
            <img
              src={twt}
              alt=""
              className="w-8 cursor-pointer hover:translate-y-4 transition-all duration-300"
            />
            <img
              src={linked}
              alt=""
              className="w-8 cursor-pointer hover:translate-y-4 transition-all duration-300"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

// "@types/react": "^18.2.66",
// "@types/react-dom": "^18.2.22",
// "@vitejs/plugin-react": "^4.2.1",
// "autoprefixer": "^10.4.19",
// "eslint": "^8.57.0",
// "eslint-plugin-react": "^7.34.1",
// "eslint-plugin-react-hooks": "^4.6.0",
// "eslint-plugin-react-refresh": "^0.4.6",
// "postcss": "^8.4.38",
// "tailwindcss": "^3.4.3",
// "vite": "^5.2.0"

export default Footer;
