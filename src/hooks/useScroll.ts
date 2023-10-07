import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollTop = () => {
  const location = useLocation();

  useEffect(() => {
    let app = document.getElementById("App");
    console.log('scroll')
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
};
