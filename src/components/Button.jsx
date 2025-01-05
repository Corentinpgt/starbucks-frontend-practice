import React from "react";
import PropTypes from "prop-types";

const Button = ({ variant, children, onClick, className }) => {
  const baseStyles = "px-4 py-1 rounded-full border-none font-medium text-center hover:cursor-pointer";
  
  const variants = {
    primary: "bg-primary-green text-white",
    secondary: "bg-secondary-green border-1 border-solid border-white text-white",
    underline: "underline bg-transparent hover:no-underline text-black",
    primaryBlack: "bg-black text-white",
    secondaryBlack: "bg-transparent border-1 border-solid border-black text-black",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "underline", "primaryBlack", "secondaryBlack"]).isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
};

export default Button;