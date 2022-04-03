import React from "react";

export interface ButtonProps {
  label: string;
}

import buttonStyle from "./Button.module.css";
// const buttonStyle = {primary: "abc"}

console.log('buttonStyle', buttonStyle);

export const Button = (props: ButtonProps) => {
  return (
    <button data-testid="btn-id" className={buttonStyle.primary}>
      {props.label}
    </button>
  );
};
