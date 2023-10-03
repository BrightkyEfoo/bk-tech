import React, { useContext } from "react";
import { navContext } from "./NavBar";

const MobileNavBar = () => {
  const { isMobNavVisible, setisMobNavVisible } = useContext(navContext);
  return isMobNavVisible ? (
    <div className="mobile-nav" onClick={(e)=>{
        if(e.currentTarget === e.target){
            setisMobNavVisible(false)
        }
    }}>
      <div className="mobile-nav-sub">
        <p>
          <span>BK</span>
          <span>-</span>
          <span>TECH</span>
        </p>
        <ul>
          <li>acceuil</li>
          <li>about</li>
          <li>services</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  ) : null;
};

export default MobileNavBar;
