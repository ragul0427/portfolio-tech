import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Education from "./Education";
import profile from "../assets/profile.jpeg";
import { fadeIn, slideIn, staggerContainer } from "../utils/motion";
import { TypingText } from "../utils/customText";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        id="about"
        className="h-[100vh] flex pt-20 justify-center gap-40 text-white bg-[#212D4D]"
      >
        <div className="w-[40vw]">
          <div className="flex gap-10 text-white">
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="relative w-full"
            >
              <img
                // src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                src={profile}
                alt="profile"
                className="w-[fit] h-[20vh] border"
              />
            </motion.div>

            <motion.div
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="flex flex-col gap-4"
            >
              <p>
                <b>Name:</b>Ragul S
              </p>
              <p>
                <b>Profile:</b>Full Stack Developer
              </p>
              <p>
                <b>Email:</b>ragulhp2704@gmail.com
              </p>
              <p>
                <b>Phone:</b>8523947145,7708823386
              </p>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("top", "tween", 0.5, 1)}
            className="flex gap-4 gap-y-7 pt-8 flex-wrap w-[100%]"
          >
            <p className="w-[18vw]">
              <h1>HTML</h1>
              <ProgressBar
                animateOnRender
                height="15px"
                bgColor="red"
                completed={90}
              />
            </p>
            <p className="w-[18vw]">
              <h1>CSS</h1>
              <ProgressBar
                animateOnRender
                height="15px"
                bgColor="blue"
                completed={80}
              />
            </p>
            <p className="w-[18vw]">
              <h1>Bootstrap</h1>
              <ProgressBar
                animateOnRender
                height="15px"
                bgColor="green"
                completed={40}
              />
            </p>
            <p className="w-[18vw]">
              <h1>Javascript</h1>
              <ProgressBar
                animateOnRender
                height="15px"
                bgColor="black"
                completed={75}
              />
            </p>
            <p className="w-[18vw]">
              <h1>React Js</h1>
              <ProgressBar
                animateOnRender
                height="15px"
                bgColor="brown"
                completed={80}
              />
            </p>
            <p className="w-[18vw]">
              <h1>Next Js</h1>
              <ProgressBar
                animateOnRender
                height="15px"
                bgColor="#F73194"
                completed={50}
              />
            </p>
            <p className="w-[18vw]">
              <h1>React Native</h1>
              <ProgressBar
                animateOnRender
                height="15px"
                bgColor="#31C832"
                completed={40}
              />
            </p>
            <p className="w-[18vw]">
              <h1>MongoDb</h1>
              <ProgressBar
                animateOnRender
                height="15px"
                bgColor="#4B308D"
                completed={70}
              />
            </p>
            <p className="w-[18vw]">
              <h1>Node Js</h1>
              <ProgressBar
                animateOnRender
                height="15px"
                bgColor="#F78700"
                completed={70}
              />
            </p>
            <p className="w-[18vw]">
              <h1>Express JS</h1>
              <ProgressBar height="15px" bgColor="yellow" completed={70} />
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="w-[40vw] text-[17px]"
        >
          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <TypingText title="About me" textStyles="pb-2" />
          </motion.h1>
          <p>
            Hello there! I'm Ragul S,Full Stack Developer with a passion for
            building robust and innovative web applications. I thrive in dynamic
            environments where I can apply my technical expertise to solve
            real-world problems and contribute to the ever-evolving landscape of
            technology.
          </p>
          <p className="pt-10">
            As a Full Stack Developer, I specialize in bringing ideas to life by
            seamlessly crafting both the frontend and backend of web
            applications. My expertise lies in creating immersive user
            interfaces with responsive design, backed by scalable and efficient
            server-side solutions. Let's turn concepts into reality, one line of
            code at a time.
          </p>
          <p className="pt-10">
            As a Full Stack Developer, my proficiency extends to designing and
            implementing robust backend systems, with MongoDB as a cornerstone
            of my database expertise. I have successfully leveraged MongoDB to
            create scalable and high-performance databases, ensuring efficient
            data storage and retrieval for dynamic web applications. From
            crafting optimized queries to implementing data modeling best
            practices, I bring a depth of MongoDB knowledge that enhances the
            overall functionality and performance of the projects I undertake.
          </p>
        </motion.div>
      </motion.div>
      <Education />
    </div>
  );
};

export default About;
