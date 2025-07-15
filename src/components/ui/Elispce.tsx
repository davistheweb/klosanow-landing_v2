import React from "react";

interface IElpliceProp {
  borderWidth?: string;
  borderColor?: string;
  bgColor?: string;
}
export const Elispce: React.FC<IElpliceProp> = ({
  borderWidth,
  borderColor,
  bgColor,
}) => {
  return (
    <div className={`${borderColor} ${borderWidth} ${bgColor} absolute`} />
  );
};
