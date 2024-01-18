/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Contact from "./Contact";
import { Badge, Card, Space } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { fadeIn, slideIn, staggerContainer } from "../utils/motion";
import { TypingText } from "../utils/customText";

const Project = () => {
  return (
    <div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        id="project"
        className="h-[100vh] pt-12 text-white bg-[#212D4D]"
      >
        <div className=" flex  flex-col items-center ">
          <motion.h1
            className="text-2xl pt-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <TypingText title=" | My Projects" textStyles="text-center" />
          </motion.h1>
        </div>
        <motion.div
          variants={slideIn("left", "tween", 0.5, 1)}
          className="flex gap-8 pt-5"
        >
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1520: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="md:w-[85vw] !px-5"
          >
            <SwiperSlide>
              <Badge.Ribbon className="w-[60px]" color="red" text="No Live">
                <div className="w-[100vw] md:w-[100%] md:h-[80vh]">
                  <div className="bg-white/10 h-[100%] flex flex-col gap-4 backdrop-blur-[3px] shadow-inner shadow-slate-100 py-5 rounded-md text-white px-5">
                    <h1>Ecommerce Project for Mobile shop</h1>
                    <a
                      href="https://sun-mobile-karur.vercel.app"
                      target="_blank"
                    >
                      Link:https://sun-mobile-karur.vercel.app
                    </a>
                    <div className="flex gap-4 flex-wrap">
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        Next Js
                      </p>
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        Tailwind Css
                      </p>
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        Mongo DB
                      </p>
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        Antd
                      </p>
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        Firebase
                      </p>

                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        Jwt
                      </p>
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        Material UI
                      </p>
                    </div>
                    <p>
                      The main purpose of this project is to enable users to
                      purchase electronic products online. Users can
                      authenticate their profiles through phone OTP
                      authentication. Once authenticated, they can explore
                      products on the website, add them to the cart, and proceed
                      to checkout to place an order. Users can also directly
                      purchase from the order exploration page. The system
                      allows users to track order details and search for
                      products to explore more options. Additionally, users can
                      adjust the quantity of products they wish to purchase. In
                      conclusion, this project was built for facilitating online
                      purchasing.
                      <br />
                      <br />I have also implemented a dashboard for managing
                      products, orders, banners, and footer settings. Within the
                      dashboard, users can create, edit, and delete products, as
                      well as perform the same actions for banners.
                      Additionally, it provides the capability to modify footer
                      settings. The integration of the admin dashboard with the
                      website ensures seamless management and control over
                      various aspects of the online platform.
                    </p>
                  </div>
                </div>
              </Badge.Ribbon>
            </SwiperSlide>
            <SwiperSlide>
              <Badge.Ribbon color="green" className="w-[60px]" text="Live">
                <div className="w-[100vw] md:w-[100%] md:h-[80vh]">
                  <div className="bg-white/10 h-[100%] flex flex-col gap-4 backdrop-blur-[3px] shadow-inner shadow-slate-100 py-5 rounded-md text-white px-5">
                    <h1>Vehicle Transportaion Management System</h1>
                    <a
                      href="https://transportation-frontend-pro.vercel.app"
                      target="_blank"
                    >
                      Link:https://transportation-frontend-pro.vercel.app
                    </a>
                    <div className="flex gap-4 flex-wrap">
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        React Js
                      </p>
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        Tailwind Css
                      </p>
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        Express Js
                      </p>
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        Mongo DB
                      </p>
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        Antd
                      </p>
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        Jwt
                      </p>
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        Material UI
                      </p>
                    </div>
                    <p>
                      The primary purpose of the project is to generate billing
                      records for transportation services. It serves as an admin
                      dashboard designed for managing various details pertaining
                      to a transportation company. Within the dashboard, the
                      admin can create, edit, and delete details such as
                      consignors, consignees, brokers, vehicles, etc. This
                      system is built for a single admin.
                      <br />
                      <br />
                      The dashboard provides an overview of all details,
                      including counts and the last ten entries. Additionally,
                      there is a reporting section where the admin can filter
                      details based on a start date to an end date. I have also
                      implemented a feature to design bills, and upon clicking
                      the print option, the data is automatically filled for
                      seamless billing.
                      <br />
                      <br />
                      In conclusion, this project was specifically developed for
                      generating print bills within a vehicle transportation
                      company.
                    </p>
                  </div>
                </div>
              </Badge.Ribbon>
            </SwiperSlide>
            <SwiperSlide>
              <Badge.Ribbon color="green" className="w-[60px]" text="Live">
                <div className="w-[100%] md:h-[80vh]">
                  <div className="bg-white/10 h-[100%] flex flex-col gap-4 backdrop-blur-[3px] shadow-inner shadow-slate-100 py-5 rounded-md text-white px-5">
                    <h1>Bromag India</h1>
                    <a href="https://www.bromagindia.in" target="_blank">
                      Link:https://www.bromagindia.in
                    </a>
                    <div className="flex gap-4 flex-wrap">
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        React Js
                      </p>
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        Tailwind Css
                      </p>
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        Express Js
                      </p>
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        Mongo DB
                      </p>
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        Antd
                      </p>
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        Jwt
                      </p>
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        Material UI
                      </p>
                      <p className="bg-green-500 w-fit px-4 rounded-full">
                        AWS-S3
                      </p>
                    </div>
                    <p>
                      This admin dashboard for Bromag India enables the
                      comprehensive management of all client-side details within
                      the web application. It includes functions such as
                      creating menus, banners, and videos, all stored on AWS S3.
                      The dashboard also allows for efficient inventory
                      management and editing of user feedback. Moreover,
                      administrators can choose which feedback to display on
                      both the web and app interfaces. Additionally, the system
                      facilitates the handling of scratch card winners and
                      manages users independently on both the web and app
                      platforms.
                      <br />
                      <br />
                      The system encompasses over 10 credentials, each tailored
                      for various roles such as KDS, front desk, partner, etc.
                      Order status management is a key feature, where the front
                      desk handles the initial status, and upon moving to KDS,
                      the KDS takes charge. KDS person can choose the order
                      status as 'ready to prepare,' select a time, and display
                      the chosen timer. The total time taken by the KDS person
                      is then recorded as the order progresses through stages
                      like 'ready to pack,' allowing them to select the
                      inventory used for packing.
                      <br />
                      <br />
                      In conclusion, it was developed to integrate the
                      restaurant website for online food ordering, similar to
                      platforms like Zomato.
                    </p>
                  </div>
                </div>
              </Badge.Ribbon>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </motion.div>

      <Contact />
    </div>
  );
};

export default Project;
