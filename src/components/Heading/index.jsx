import React from "react";

const sizes = {
  "3xl": "text-4xl font-bold md:text-[34px] sm:text-[32px]",
  "2xl": "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
  xl: "text-2xl font-semibold md:text-[22px]",
  "5xl": "text-[68px] font-bold md:text-5xl",
  "4xl": "text-[50px] font-bold md:text-[46px] sm:text-[40px]",
  s: "text-sm font-semibold",
  md: "text-base font-bold",
  "6xl": "text-[70px] font-semibold md:text-5xl",
  xs: "text-[13px] font-semibold",
  lg: "text-lg font-bold",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
