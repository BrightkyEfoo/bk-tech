import { useEffect } from "react";

export const useScrollTop = () => {
  useEffect(() => {
    let app = document.getElementById("App");

    app?.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
};
