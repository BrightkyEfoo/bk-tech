import { useEffect, useState } from "react";

export const useCustomerSlider = (
  data: {
    text: string;
    photo: string;
    name: string;
    poste: string;
  }[]
) => {
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    const myInter = setInterval(() => {
      const ell = document.getElementById(
        "section6-container-sub-right-slider"
      );
      setSelected((prev) => {
        let res;
        if (prev === data.length - 1) {
          res = 0;
        } else {
          res = prev + 1;
        }
        ell?.scrollTo({
          top: 0,
          left: res * ell.clientWidth,
          behavior: "smooth",
        });
        return res;
      });
      // console.log("selected", selected);
    }, 2000);

    return () => {
      clearInterval(myInter);
    };
  }, []);

  return selected;
};
