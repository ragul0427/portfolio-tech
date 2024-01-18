/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Form, Input } from "antd";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
import { fadeIn, footerVariants, staggerContainer } from "../utils/motion";

const Contact = () => {
  const backgroundStyle = {
    backgroundImage: `url("https://img.freepik.com/premium-photo/light-stripes-moving-fast-dark-background_271825-9.jpg?size=626&ext=jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="contact"
      className="h-[65vh]  pt-20 text-white  bg-[#192135]"
    >
      <motion.div   className="flex gap-10 pl-28 z-50">
        <motion.div  variants={fadeIn("left", "tween", 0.2, 1)} className="w-[25vw]">
          <h1>Get In Touch</h1>
          <p>
            Thank you for visiting my portfolio. I am excited to connect with
            you. Whether you have a project in mind, want to collaborate, or
            simply want to say hello, feel free to reach out to me.
          </p>
        </motion.div>
        <motion.div  variants={fadeIn("right", "tween", 0.2, 1)} className="w-[25vw] pt-5">
          <p>
            If you prefer, you can use the contact form right to send me a
            message directly. I will do my best to respond to you as soon as
            possible.
          </p>
        </motion.div>
        <motion.div  variants={fadeIn("right", "tween", 0.2, 1)} className="bg-cyan-900 rounded-md pt-5 px-10 py-4 !z-50">
          <Form>
            <Form.Item>
              <Input type="text" name="name" placeholder="Enter your name..." />
            </Form.Item>
            <Form.Item>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email..."
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="number"
                name="number"
                placeholder="Enter your number..."
              />
            </Form.Item>
            <Form.Item>
              <Input.TextArea
                type="number"
                name="number"
                placeholder="Enter your number..."
              />
            </Form.Item>
            <Form.Item className="flex items-center justify-center">
              <Button className="!bg-green-500 w-[80px] h-[30px] !text-white">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </motion.div>
      </motion.div>
      <motion.div
       variants={footerVariants}
        style={backgroundStyle}
        className="border-t  relative bottom-[25vh] h-[35vh]"
      >
        <div className="bg-black/10 backdrop-blur-[4px] flex gap-32 items-center pl-[5vw] shadow-sm w-screen h-[100%]">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Explore</h1>
            <div>
              <p className="cursor-pointer pt-2">Home</p>
              <p className="cursor-pointer pt-2">About</p>
              <p className="cursor-pointer pt-2">Education</p>
              <p className="cursor-pointer pt-2">Project</p>
              <p className="cursor-pointer pt-2">contact</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Contact me</h1>
            <div>
              <p className="cursor-pointer pt-2">ragulhp2704@gmail.com</p>
              <p className="cursor-pointer pt-2">8523947145,7708823386</p>
              <div className="flex gap-4 pt-2">
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
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Address</h1>
            <p>135/4 VallayakaranPudur</p>
            <p>krishnarayapuram(TK)</p>
            <p>karur-639 108</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
