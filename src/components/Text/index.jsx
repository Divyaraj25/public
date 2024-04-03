import React from "react";

const sizes = {
  xs: "text-sm font-normal",
  lg: "text-2xl font-normal md:text-[22px]",
  s: "text-base font-normal",
  "2xl": "text-[39px] font-light md:text-[37px] sm:text-[35px]",
  xl: "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  md: "text-lg font-normal",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_99 font-sairacondensed ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
