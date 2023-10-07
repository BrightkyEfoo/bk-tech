import { createContext } from "react";
import "./style.css";
import { MdSunny } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { VscMenu } from "react-icons/vsc";
import MobileNavBar from "./MobileNavBar";
import { useDesktopNavBar } from "../../hooks/UseDesktopNavBar";
import Button3 from "../Buttons/Button3";

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
  const {
    navRef,
    colorChange,
    isMobNavVisible,
    setisMobNavVisible,
    navigate,
    goHome,
    handleToggleMenu,
    isMobile,
    isActualRoute,
    setActualRouteIndex,
  } = useDesktopNavBar();

  return (
    <navContext.Provider value={{ isMobNavVisible, setisMobNavVisible }}>
      <div
        ref={navRef}
        className={"navbar-container " + (colorChange ? "onScroll" : "")}
      >
        <p onClick={goHome} className="link">
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
                    className={
                      (isActualRoute(el) ? "link actualRoute" : "link") +
                      " " +
                      (colorChange ? "onLinkScroll" : "")
                    }
                    key={i}
                    onClick={(e) => {
                      navigate(el.link ? el.link : "/" + el.text);
                      setActualRouteIndex(i);
                    }}
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
            <Button3 isMobile={isMobile} />
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
