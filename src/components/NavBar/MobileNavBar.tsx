import React, { useContext } from "react";
import { links, navContext } from "./NavBar";
import { useNavigate } from "react-router-dom";
import useGoHome from "../../hooks/useGoHome";

const MobileNavBar = () => {
  const navigate = useNavigate();
  const goHome = useGoHome();
  const { isMobNavVisible, setisMobNavVisible } = useContext(navContext);
  return isMobNavVisible ? (
    <div
      className="mobile-nav"
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          setisMobNavVisible(false);
        }
      }}
    >
      <div className="mobile-nav-sub">
        <p onClick={goHome}>
          <span>BK</span>
          <span>-</span>
          <span>TECH</span>
        </p>
        <ul>
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
        </ul>
      </div>
    </div>
  ) : null;
};

export default MobileNavBar;
