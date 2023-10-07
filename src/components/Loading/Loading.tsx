import React, { useLayoutEffect } from "react";
import "./style.scss";
import { gsap } from "gsap";
const Loading = () => {
  useLayoutEffect(() => {
    return () => {
      const v = async () => {
        const t1 = gsap.timeline();

        await t1.to(".loader-container", { duration: 500, opacity: 0 });
      };
      v();
      //   t1.play()
    };
  }, []);
  return (
    <div className="loader-container">
      <img src="images/coder.gif" alt="" />
    </div>
  );
};

export default Loading;
