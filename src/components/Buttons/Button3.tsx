import { FaPhoneAlt } from "react-icons/fa";

export default function Button3({ isMobile }: { isMobile: boolean }) {
    return (
      <button className="quote-button">
        {isMobile ? <FaPhoneAlt /> : "Demander un devis"}{" "}
        <span className="circle"></span>
      </button>
    );
  }