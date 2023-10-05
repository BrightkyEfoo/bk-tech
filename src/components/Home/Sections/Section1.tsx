"use client;";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card1 from "../cards/Card1";
import "./style.scss";
import { Autoplay } from "swiper/modules";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const cards = [
  {
    text: "Marketing Solution",
    image: "images/marketing.png",
    colorClass: "back-3faee5",
  },
  {
    text: "Car Rental Solution",
    image: "images/car-rental.png",
    colorClass: "back-3faee5",
  },
  {
    text: "VR Solution",
    image: "images/vr.png",
    colorClass: "back-3faee5",
  },
  {
    text: "Custom App Solution",
    image: "images/app-develop.png",
    colorClass: "back-3faee5",
  },
  {
    text: "e-Wallet Solution",
    image: "images/ewallet.png",
    colorClass: "back-3faee5",
  },
  {
    text: "Startup Solution",
    image: "images/startup.png",
    colorClass: "back-3faee5",
  },
];
const Section1 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const isSmall = useMediaQuery({
    query: "(max-width: 900px)",
  });
  const isXSmall = useMediaQuery({
    query: "(max-width: 600px)",
  });
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="section1-container"
    >
      <div className="section1-container-sub">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={isSmall ? 50 : 5}
          slidesPerView={isXSmall ? 1 : isSmall ? 2 : 3}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          onSlideChange={() => console.log("slide change")}
          //   onSwiper={(swiper) => console.log(swiper)}
        >
          {cards.map((el, i) => {
            return (
              <SwiperSlide key={i}>
                <Card1 {...el} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Section1;
