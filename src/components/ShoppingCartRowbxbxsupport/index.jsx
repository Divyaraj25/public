import React from "react";
import { Text, OtherHeading, OtherBtn, Img } from "./..";

export default function ShoppingCartRowbxbxsupport({
  productsupport = "Product Support",
  duration = "Up to 3 years on-site warranty available for your peace of mind.",
  personal = "Personal Account",
  withbig = "With big discounts, free delivery and a dedicated support specialist.",
  amazingsavings = "Amazing Savings",
  offer = "Up to 70% off new Products, you can be sure of the best price.",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex md:flex-col w-full gap-[31px] p-[45px] md:p-5 bg-gray-50">
        <div className="flex flex-col items-center w-[24%] md:w-full mt-[15px] ml-[246px] gap-6 md:mt-0 md:ml-0">
          <OtherBtn color="red_700" size="lg" className="w-[65px] rounded-[32px]">
            <Img src="images/img_bx_bx_support.svg" />
          </OtherBtn>
          <div className="flex flex-col self-stretch items-center gap-[9px]">
            <OtherHeading size="lg" as="h1" className="!font-poppins text-center !font-bold">
              {productsupport}
            </OtherHeading>
            <Text size="s" as="p" className="!text-black-900_99 !font-poppins text-center opacity-0.7 leading-[140%]">
              {duration}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center w-[20%] md:w-full gap-[21px]">
          <OtherBtn color="red_700" size="lg" className="w-[65px] rounded-[32px]">
            <Img src="images/img_ri_account_pin_circle_fill.svg" />
          </OtherBtn>
          <div className="flex flex-col self-stretch items-center gap-3">
            <OtherHeading size="lg" as="h2" className="!font-poppins text-center !font-bold">
              {personal}
            </OtherHeading>
            <Text size="s" as="p" className="!text-black-900_99 !font-poppins text-center opacity-0.7 leading-[140%]">
              {withbig}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center w-[20%] md:w-full gap-[23px]">
          <OtherBtn color="red_700" size="lg" className="w-[65px] rounded-[32px]">
            <Img src="images/img_entypo_price_tag.svg" />
          </OtherBtn>
          <div className="flex flex-col self-stretch items-center gap-2.5">
            <OtherHeading size="lg" as="h2" className="!font-poppins text-center !font-bold">
              {amazingsavings}
            </OtherHeading>
            <Text size="s" as="p" className="!text-black-900_99 !font-poppins text-center opacity-0.7 leading-[140%]">
              {offer}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
