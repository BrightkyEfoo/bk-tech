import React, { ChangeEvent, FormEventHandler, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import InputWrapper, { InputWrapperProps } from "../../Inputs/InputWrapper";
import { FaLocationPin, FaMessage, FaPerson } from "react-icons/fa6";
import { IconType } from "react-icons";
import { FaFile, FaPhoneAlt, FaUser, FaWhatsapp } from "react-icons/fa";
import "./style.scss";
import { MdEmail } from "react-icons/md";
import { ValidateEmail } from "../../../functions/email";
import { validatePhoneNumber } from "../../../functions/ValidatePhone";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import CustomerSlider3 from "../../CustomSlider3/CustomSlider3";

const clients: { link: string; image: string }[] = [
  {
    image: "images/customer-logo-1.png",
    link: "#",
  },
  {
    image: "images/customer-logo-2.png",
    link: "#",
  },
  {
    image: "images/customer-logo-3.png",
    link: "#",
  },
  {
    image: "images/customer-logo-4.png",
    link: "#",
  },
  {
    image: "images/customer-logo-5.png",
    link: "#",
  },
  {
    image: "images/customer-logo-6.png",
    link: "#",
  },
  {
    image: "images/customer-logo-7.png",
    link: "#",
  },
  {
    image: "images/customer-logo-8.png",
    link: "#",
  },
  {
    image: "images/customer-logo-9.png",
    link: "#",
  },
];

const Section1 = () => {
  const [form, setform] = useState({
    fullname: "",
    phone: "",
    email: "",
    interest: "",
    location: "",
    whatsapp: "",
    brief: "",
    terms: false,
  });
  const handleChangeByTagName = (
    el: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setform((prev) => {
      // @ts-ignore
      prev[el.target.name] = el.target.value;
      return { ...prev };
    });
  };
  const verificator = (value: string) => {
    return value.length > 5;
  };
  const inputs: InputWrapperProps[] = [
    {
      placeholder: "Full Name",
      elName: "input",
      name: "fullname",
      errorMessage: "Please enter your name",
      Icon: FaUser,
      value: form.fullname,
      onChange: handleChangeByTagName,
      type: "text",
      verificator,
    },
    {
      placeholder: "Mobile Number",
      elName: "input",
      verificator: validatePhoneNumber,
      name: "phone",
      errorMessage: "Please enter a valid mobile number",
      Icon: FaPhoneAlt,
      onChange: handleChangeByTagName,
      value: form.phone,
      type: "tel",
    },
    {
      placeholder: "Email Address",
      elName: "input",
      name: "email",
      errorMessage: "Please enter a valid email address",
      verificator: ValidateEmail,
      Icon: MdEmail,
      onChange: handleChangeByTagName,
      value: form.email,
      type: "email",
    },
    {
      placeholder: "Interested In",
      elName: "select",
      verificator: (value) => {
        return value !== "";
      },
      name: "interest",
      errorMessage: "Please select your interest",
      Icon: FaFile,
      onChange: handleChangeByTagName,
      value: form.interest,
      type: "",
      extraOptions: {
        dangerouslySetInnerHTML: {
          __html: `
          <option></option>
          <option>Graphic Design</option>
          <option>Web Design</option>
          <option>App Design</option>
          <option>Other</option>         
          `,
        },
      },
    },
    {
      placeholder: "Your Location",
      elName: "input",
      name: "location",
      errorMessage: "Please enter your location",
      Icon: FaLocationPin,
      onChange: handleChangeByTagName,
      value: form.location,
      verificator,
      type: "text",
    },
    {
      placeholder: "Whatsapp No",
      elName: "input",
      name: "whatsapp",
      errorMessage: "Please provide Whatsapp No.",
      verificator: validatePhoneNumber,
      Icon: FaWhatsapp,
      onChange: handleChangeByTagName,
      value: form.whatsapp,
      type: "tel",
    },
    {
      placeholder: "Brief about the project",
      elName: "textarea",
      name: "brief",
      errorMessage:
        "Please enter brief of the project (Max 10000 characters) ",
      Icon: FaMessage,
      verificator: (value) => value.length < 10000,
      onChange: handleChangeByTagName,
      value: form.brief,
      type: "",
      // extraOptions : 
    },
  ];

  return (
    <div className="contact-section-1-container">
      <div className="contact-section-1-container-sub">
        <TypeAnimation
          sequence={[
            "Bonjour  ",
            1300,
            "Hello  ",
            1000,
            "Konnichiwa  ",
            1600,
            "Hola  ",
            1500,
            "Guten tag  ",
            1000,
            "Ola  ",
            900,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
        />

        <p className="simple-about-p">
          Please fill out the form below if you have a plan or project in mind
          that you'd like to share with us.
        </p>
        <div className="sub-section-container">
          <div className="form-container">
            <h2 className="title-blue">Get In Touch</h2>
            <p className="simple-about-p">
              We will catch you as early as we receive the message
            </p>
            <form>
              {inputs.map((el, i) => {
                return <InputWrapper key={i} {...el} />;
              })}
            </form>
            <div>
              <input type="checkbox" />{" "}
              <label>
                By clicking the “Submit” button you agree to our{" "}
                <Link to="/terms-conditions">Terms & Conditions.</Link>
              </label>
              <button type="button">
                Submit <BiChevronRight color="white" />
              </button>
            </div>
          </div>
          <div className="right-side-container">
            <h2 className="title-blue">Trusted by</h2>
            <span className="simple-about-p">
              Clients belive us and we deliverd them good service
            </span>
            <div>
              {clients.map((el, i) => {
                return <img key={i} src={el.image} alt="" />;
              })}
            </div>
            <CustomerSlider3 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
