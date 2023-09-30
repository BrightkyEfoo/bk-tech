import { useEffect, useRef, useState } from "react";
import "./style.css";
import { MdSunny } from "react-icons/md";
const NavBar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div
      ref={navRef}
      className={"navbar-container " + (colorChange ? "onScroll" : "")}
    >
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
        <li>
          <button className="theme-toggle-button">
            <div>
              <MdSunny size={20} />
            </div>
          </button>
        </li>
        <li>
          <button className="quote-button">
            Demander un devis <span className="circle"></span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
