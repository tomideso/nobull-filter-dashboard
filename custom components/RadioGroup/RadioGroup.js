import React from "react";
import classes from "./RadioGroup.module.css";
// import { Field } from "formik";

const RadioGroup = ({ children, className = "" }) => {
  return (
    <>
      <div className={[classes.RadioGroup, className].join(" ")}>
        {children}
      </div>
    </>
  );
};

export default RadioGroup;

export const RadioInput = ({
  padding = "0.05rem 0.5rem",
  color = "#000",
  bgColor = "#FFC600",
  fontSize = "12px",
  ...props
}) => {
  return (
    <span className="RadioGroup">
      <input
        type="radio"
        id={`option-${props.label}-${props.name}`}
        {...props}
      />
      <label htmlFor={`option-${props.label}-${props.name}`}>
        {props.label}
      </label>

      <style jsx>{`
        .RadioGroup label {
          color: #fff;
          display: inline-block;
          cursor: pointer;
          padding: ${padding};
        }

        .RadioGroup input[type="radio"]:checked + label {
          color: ${color};
          background: ${bgColor};
          font-size: ${fontSize};
          border-radius: 10px;

          transition: background 500ms cubic-bezier(0.77, 0, 0.175, 1);
        }

        span.RadioGroup {
          font-size: 12px;
        }
      `}</style>
    </span>
  );
};
