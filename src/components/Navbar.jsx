import { useState } from "react";
// import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Projects", path: "projects" },
    { link: "Skills", path: "skill" },
  ];

  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-color-primary fixed top-0 right-0 left-0 select-none cursor-pointer">
        <div className="text-lg container mx-auto flex justify-between items-center font-meduim">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-color-primary"
            >
              LS Portfolio
            </a>
            {/* showing navitem */}
            {/* <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={link}
                  to={path}
                  className="block hover:text-gray-300"
                >
                  {link}
                </Link>
              ))}
            </ul> */}
          </div>

          {/* language and signup */}
          {/* <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-color-secondary"
            >
              <GrLanguage />
              Language
            </a>
            <button className="bg-color-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              Sign up
            </button>
          </div> */}

          <div className="space-x-12 hidden md:flex items-center">
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={link}
                  to={path}
                  className="block hover:text-gray-300"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          {/* menu button only display on mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus-outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-color-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-color-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-color-secondary text-xl ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            key={link}
            to={path}
            className="block text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            {link}
          </Link>
        ))}
      </div>
    </>

    //navitems for mobile
  );
};

export default Navbar;
