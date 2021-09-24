import React from "react";

import "./Button.css";
const Button = (props) => {
  return (
    <>
      <button className={props.section ? "section-button" : "button"}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
