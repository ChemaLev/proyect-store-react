import React, { ReactNode } from "react";

type BtnProps = {
  children: string | ReactNode;
  typeBtn: "submit" | "reset" | "button";
  custom?: string;
  onClick?: () => void;
};

const Button: React.FC<BtnProps> = ({ typeBtn, children, onClick, custom }) => {
  return (
    <button
      type={typeBtn}
      className={custom ? `btn btn-${custom}` : `btn`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
