import React from "react";

const sizes = {
  "3xl": "text-[32px] font-semibold md:text-3xl sm:text-[28px]",
  "2xl": "text-2xl font-semibold md:text-[22px]",
  xl: "text-xl font-semibold",
  "5xl": "text-5xl font-semibold md:text-[44px] sm:text-[38px]",
  "4xl": "text-4xl font-bold md:text-[34px] sm:text-[32px]",
  s: "text-sm font-semibold",
  md: "text-base font-bold",
  xs: "text-[13px] font-semibold",
  lg: "text-lg font-semibold",
};

const OtherHeading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { OtherHeading };
