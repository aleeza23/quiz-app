import React from "react";

const Button = ({children, onClick, className}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={` ${className} fw-bold  btn rounded border-0 py-2`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
