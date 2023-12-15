import * as React from "react";

type ButtonStyle = {
  [property: string]: string;
}

export interface ButtonProps {
  label: string;
  style: ButtonStyle;
  onClick: () => void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ label, style, onClick }) => {
  return (
    <button style={style} onClick={onClick}>{label}</button>
  );
};
