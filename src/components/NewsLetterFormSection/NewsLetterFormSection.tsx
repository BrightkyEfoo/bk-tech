import { FaAngleRight } from "react-icons/fa";
import "./style.scss";

const NewsLetterFormSection = () => {
  return (
    <div className="newsletter-form-section-container">
      <div className="newsletter-form-section-container-sub">
        <div>
          <h2 className="title-blue">Get New Insights Weekly</h2>
          <p className="simple-about-p">
            News letter dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt. Enter your email
          </p>
        </div>
        <div>
          <input type="email" placeholder="Email Your Address" />
          <button>
            <span>Subscribe</span> <FaAngleRight size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterFormSection;
