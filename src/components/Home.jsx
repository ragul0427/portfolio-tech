/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "../assets/bg.gif";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
import About from "./About";
import { TypingText } from "../utils/customText";
import { fadeIn, staggerContainer } from "../utils/motion";

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    <div className="pt-[8vh] !overflow-x-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        id="home"
        style={backgroundStyle}
      >
        <div className="bg-black/70  h-[100vh] backdrop-blur-[4px] flex pt-[25vh] w-screen  justify-center">
          <div className="text-4xl text-white flex flex-col gap-4 items-center ">
            <motion.h1 variants={fadeIn("left", "tween", 0.2, 1)}>
              Ragul S
            </motion.h1>
            <motion.p
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <TypingText
                title="I'm Full Stack Developer"
                textStyles="text-center"
              />
            </motion.p>
            <div className="flex gap-4">
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <WhatsAppIcon />
              </a>
              <a href="#">
                <InstagramIcon />
              </a>
              <a href="#">
                <LinkedInIcon />
              </a>
              <a href="#">
                <GitHubIcon />
              </a>
            </div>
            <div className="flex gap-5">
              <a
                href="#"
                className="border hover:scale-95 duration-300 border-white text-[18px]  px-8 rounded-md"
              >
                About Me
              </a>
              <a
                href="#"
                className="border hover:scale-95 duration-300 border-white text-[18px] px-8 rounded-md"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <div>
        <About />
      </div>
    </div>
  );
}

export default Home;
