import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
// replace with your logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className="w-screen bg-white text-black shadow-md fixed top-0 left-0 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo + Title */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="FaunaFlux Logo" className="h-9 w-8 rounded-full logo-spin" />
          <h1 className="text-lg font-semibold tracking-wide">
            <span className="text-black">Fauna</span>
            <span className="text-green-800">Flux</span>
            
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm">
          {[
            ["Home", "/"],
            ["Population Metrics", "/population"],
            ["Community", "/community"],
            ["Alert Page", "/alerts"],
            ["Climate Impact", "/climate"],
            ["About Us", "/about"],
          ].map(([name, path]) => (
            <Link
              key={name}
              to={path}
              className="hover:text-green-700 transition-colors duration-200"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Log In Button */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="bg-green-700 text-white font-medium px-4 py-1.5 rounded-md border border-transparent hover:bg-transparent hover:text-green-800 hover:border-green-800 transition-all duration-200"
          >
            Log In
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center space-y-[4px] focus:outline-none"
        >
          <span
            className={`block h-[2px] w-6 bg-black transition-all ${
              isOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          ></span>
          <span
            className={`block h-[2px] w-6 bg-black transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[2px] w-6 bg-black transition-all ${
              isOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-green-900 text-white flex flex-col items-center space-y-4 py-4 border-t border-green-700"
        >
          {[
            ["Home", "/"],
            ["Population Metrics", "/population"],
            ["Community", "/community"],
            ["Alert Page", "/alerts"],
            ["Climate Impact", "/climate"],
            ["About Us", "/about"],
          ].map(([name, path]) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className="hover:text-green-200 transition-colors duration-200"
            >
              {name}
            </Link>
          ))}
          <Link
            to="/login"
            className="bg-white text-green-800 font-medium px-4 py-1.5 rounded-md border border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Log In
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
