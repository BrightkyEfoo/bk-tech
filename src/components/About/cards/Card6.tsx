import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
type Props = {
  city: string;
  officeType: string;
  location: string;
  email?: string;
  phone?: string;
  image: string;
};
const Card6 = ({ city, image, location, officeType, email, phone }: Props) => {
  return (
    <div className="about-card-6">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h4>{city}</h4>
        <h5>{officeType}</h5>
        <p className="simple-about-p">{location}</p>
        {email ? (
          <p className="simple-about-p">
            <FaPhoneAlt /> <span>{email}</span>
          </p>
        ) : null}
        {phone ? (
          <p className="simple-about-p">
            <MdMail /> <span>{phone}</span>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Card6;
