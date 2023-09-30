import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { gsap } from "gsap";

interface Props {
  children: JSX.Element | string;
  width?: "fit-content" | "100%";
}
const Reveal3 = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      gsap.set(ref, {left : "-100vw"})
      gsap.to(ref, { left: 0, duration: 500 });
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        // left: "-100vw",
      }}
    >
      {children}
    </div>
  );
};

export default Reveal3;
