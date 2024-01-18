import React from "react";
import Project from "./Project";
import { TypingText } from "../utils/customText";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Education = () => {
  return (
    <div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        id="education"
        className="h-[100vh] pt-10  bg-[#192135]"
      >
        <motion.h1
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="text-white text-3xl text-center pt-10"
        >
          <TypingText title=" | My Education" textStyles="text-center" />
        </motion.h1>
        <motion.div   variants={fadeIn("right", "tween", 0.2, 1)} className="text-white flex items-center gap-20 text-[18px] justify-center pt-20">
          <div className="flex flex-col gap-20">
            <div className="bg-white/10 backdrop-blur-[3px] shadow-inner shadow-slate-100 py-5 rounded-md text-white px-5">
              <h1 className="font-semibold">Certification Course</h1>
              <p>Course On Full stack development-MERN</p>
              <p>Liwewire Training Institute-Karur,Tamil nadu</p>
              <p>2022-2023</p>
            </div>
            <div className="bg-white/10 backdrop-blur-[3px] shadow-inner shadow-slate-100 py-5 rounded-md text-white px-5">
              <h1 className="font-semibold">Under Graduation</h1>
              <p>Hindustan college of arts and science-coimbatore,Tamil nadu</p>
              <p>2019-2022</p>
              <p>65%</p>
            </div>
          </div>
          <div className="flex flex-col gap-20">
            <div className="bg-white/10 backdrop-blur-[3px] shadow-inner shadow-slate-100 py-5 rounded-md text-white px-5">
              <h1 className="font-semibold">HSC</h1>
              <p>
                Lord's park matriculation higher secondary school-karur,Tamil
                nadu
              </p>
              <p>2018-2019</p>
              <p>63%</p>
            </div>
            <div className="bg-white/10 backdrop-blur-[3px] shadow-inner shadow-slate-100 py-5 rounded-md text-white px-5">
              <h1 className="font-semibold">SSLC</h1>
              <p>
                Lord's park matriculation higher secondary school-karur,Tamil
                nadu
              </p>
              <p>2016-2017</p>
              <p>88%</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <Project />
    </div>
  );
};

export default Education;
