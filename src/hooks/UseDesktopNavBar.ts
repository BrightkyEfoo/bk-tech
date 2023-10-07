import { useLocation, useNavigate } from "react-router-dom";
import useGoHome from "./useGoHome";
import { useEffect, useMemo, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useDesktopNavBar = () => {
  // yooo
  const navRef = useRef<HTMLDivElement>(null);
  const [colorChange, setColorchange] = useState(false);
  const [actualRouteIndex, setActualRouteIndex] = useState(0);
  const isMobile = useMediaQuery({
    query: "(max-width: 870px)",
  });
  const [isMobNavVisible, setisMobNavVisible] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  const location = useLocation();

  const navigate = useNavigate();
  const goHome = useGoHome();
  // useMemo(() => first, [el])
  const isActualRoute = (el: { text: string; link?: string | undefined }) => {
    // console.log(location.pathname)
    if (el.link === "/") {
      if (location.pathname === el.link) {
        return true;
      } else {
        return false;
      }
    }
    return location.pathname.includes(el.link ? el.link : "/" + el.text);
  };
  const handleToggleMenu = () => {
    setisMobNavVisible((prev) => {
      return !prev;
    });
  };
  window.addEventListener("scroll", changeNavbarColor);
  useEffect(() => {}, [isMobile]);

  return {
    navRef,
    colorChange,
    isMobNavVisible,
    setisMobNavVisible,
    navigate,
    goHome,
    handleToggleMenu,
    isMobile,
    setActualRouteIndex,
    isActualRoute,
  };
};
