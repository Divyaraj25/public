import React from "react";

const sizes = {
  xs: "text-[13px] font-normal",
  lg: "text-lg font-normal",
  s: "text-sm font-normal",
  xl: "text-[39px] font-light md:text-[37px] sm:text-[35px]",
  md: "text-base font-normal",
};

const OtherText = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-800 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { OtherText };
