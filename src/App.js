/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import "./App.css";
import Home from "./components/Home";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { navVarients } from "./utils/motion";

function App() {
  return (
    <div className="!bg-[#090714]">
      <motion.div
        variants={navVarients}
        initial="hidden"
        whileInView="show"
        className="bg-blue-800 !bg-[#090714] shadow-md fixed z-50 w-screen text-white h-[8vh] flex items-center justify-between px-[10vw]"
      >
        <div>
          <h1 className=" h-8 w-8 flex text-gray-300 hover:text-white font-bold items-center justify-center rounded-full shadow-inner shadow-white">
            R
          </h1>
        </div>
        <ul className="flex gap-20">
          <li className="cursor-pointer">
            <Link smooth to="home" className="nav">
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link smooth to="about" className="nav">
              About
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link smooth to="education" className="nav">
              Education
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link smooth to="project" className="nav">
              Projects
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link smooth to="contact" className="nav">
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
