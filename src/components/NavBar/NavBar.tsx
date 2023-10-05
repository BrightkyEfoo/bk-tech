import { createContext, useEffect, useRef, useState } from "react";
import "./style.css";
import { useMediaQuery } from "react-responsive";
import { MdSunny } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { VscMenu } from "react-icons/vsc";
import MobileNavBar from "./MobileNavBar";
import useGoHome from "../../hooks/useGoHome";
import { useNavigate } from "react-router-dom";
export const navContext = createContext<{
  isMobNavVisible: boolean;
  setisMobNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
}>({ isMobNavVisible: false, setisMobNavVisible: () => {} });

export const links: {
  text: string;
  link?: string;
}[] = [
  {
    text: "acceuil",
    link: "/",
  },
  {
    text: "about",
    // link : 'about'
  },
  {
    text: "services",
  },
  {
    text: "contact",
  },
];
const NavBar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [colorChange, setColorchange] = useState(false);
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
  const navigate = useNavigate();
  const goHome = useGoHome();

  console.log("isMobile", isMobile);
  const handleToggleMenu = () => {
    console.log("toggled");
    setisMobNavVisible((prev) => {
      return !prev;
    });
  };
  window.addEventListener("scroll", changeNavbarColor);
  useEffect(() => {}, [isMobile]);

  return (
    <navContext.Provider value={{ isMobNavVisible, setisMobNavVisible }}>
      <div
        ref={navRef}
        className={"navbar-container " + (colorChange ? "onScroll" : "")}
      >
        <p onClick={goHome}>
          <span>BK</span>
          <span>-</span>
          <span>TECH</span>
        </p>
        <ul>
          {!isMobile && (
            <>
              {links.map((el, i) => {
                return (
                  <li
                    key={i}
                    onClick={(e) => navigate(el.link ? el.link : "/" + el.text)}
                  >
                    {el.text}
                  </li>
                );
              })}
            </>
          )}

          <li>
            <button className="theme-toggle-button">
              <div>
                <MdSunny size={20} />
              </div>
            </button>
          </li>
          <li>
            <button className="quote-button">
              {isMobile ? <FaPhoneAlt /> : "Demander un devis"}{" "}
              <span className="circle"></span>
            </button>
          </li>
          {isMobile && (
            <li
              className={"menu-button " + (colorChange ? "m-blacked" : "")}
              onClick={handleToggleMenu}
            >
              <VscMenu color={colorChange ? "white" : "black"} size={25} />
            </li>
          )}
        </ul>
        {isMobile && <MobileNavBar />}
      </div>
    </navContext.Provider>
  );
};

export default NavBar;
