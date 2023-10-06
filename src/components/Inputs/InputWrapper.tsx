import React, { ChangeEvent, SyntheticEvent, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FaXmark } from "react-icons/fa6";
import "./style.scss";
import { FaCheck } from "react-icons/fa";
export type InputWrapperProps = {
  placeholder: string;
  type: string;
  name: string;
  value: string;
  extraOptions?: any;
  onChange: (
    el: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  Icon: IconType;
  errorMessage: string;
  elName: "input" | "textarea" | "select";
  verificator: (value: string) => boolean;
};

// type Props = {
//     placeholder: string;
//     type: string;
//     name: string;
//     onChange:
//       | FormEventHandler<HTMLTextAreaElement>
//       | FormEventHandler<HTMLInputElement>
//       | undefined;
//     Icon: IconType;
//     errorMessage: string;
//     El:
//       | ReactHTMLElement<HTMLInputElement>
//       | ReactHTMLElement<HTMLTextAreaElement>;
//     isTextArea: boolean;
//   };
// const InputWrapper = ({
//   Icon,
//   El,
//   errorMessage,
//   placeholder,
//   type,
//   isTextArea,
//   name,
//   onChange,
// }: Props) => {
//   useEffect(() => {
//     if (isTextArea) {
//     } else {
//       El.props.type = type;
//     }
//     El.props.onChange = onChange;
//     El.props.name = name;
//   }, [type, El.props, isTextArea, name, onChange]);

//   return (
//     <div>
//       <Icon />
//       {El}
//       <FaCross color="red" />
//       <span className="placeholder">{placeholder}</span>
//       <span className="error-message">{errorMessage}</span>
//     </div>
//   );
// };

const InputWrapper = ({
  Icon,
  elName,
  errorMessage,
  placeholder,
  value,
  type,
  name,
  onChange,
  verificator,
  extraOptions,
}: InputWrapperProps) => {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);
  return (
    <div
      className={
        "input-wrapper-contaier " +
        (touched && verificator(value) ? "border-blue " : "") +
        (touched && !verificator(value) ? "border-red " : "")
      }
    >
      <Icon size={18} />
      {React.createElement(elName, {
        name,
        type,
        onChange,
        value,
        ref: inputRef,
        onFocus: (e: SyntheticEvent) => {
          setFocused(true);
        },
        onBlur: (e: SyntheticEvent) => {
          setFocused(false);
          setTouched(true);
        },
        ...extraOptions,
      })}
      {/* <input onFocus={} on/> */}
      {touched && verificator(value) ? (
        <FaCheck color="green" size={20} />
      ) : null}
      {touched && !verificator(value) ? (
        <FaXmark color="red" size={20} />
      ) : null}

      <div className="placeholder-container ">
        <span
          className={
            focused || value ? "placeholder placeholder-top" : "placeholder"
          }
        >
          {placeholder}
        </span>
      </div>
      {!verificator(value) && touched ? (
        <div className="error-message-container">
          <span className="error-message">{errorMessage}</span>
        </div>
      ) : null}
    </div>
  );
};

export default InputWrapper;
