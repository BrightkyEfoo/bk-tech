import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollTop = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("chaanged");
    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
  }, [location.pathname]);

};
