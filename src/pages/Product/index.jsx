import React from "react";
import { Helmet } from "react-helmet";
import {
  Text,
  Img,
  Button,
  Heading,
  RatingBar,
  CheckBox,
} from "../../components";
import { Link } from "react-router-dom";

export default function ProductPage() {
  return (
    <>
      <Helmet>
        <title>Brave Stone</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col w-full pb-[66px] gap-[137px] md:gap-[102px] md:pb-5 sm:gap-[68px] border-black-900 border border-solid bg-white-A700">
        <header className="p-[43px] md:p-5 bg-black-900">
          <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto max-w-[1250px]">
            <Heading size="4xl" as="h1" className="!text-white-A700">
              <Link to="/">Brave Stone</Link>
            </Heading>
            <div className="flex mt-2 flex-wrap">
              <Link to="/" rel="noreferrer" className="self-start">
                <h6 className="text-white-A700">Home</h6>
              </Link>

              <Link
                to="/equipmentcategory"
                rel="noreferrer"
                className="self-end ml-[23px]"
              >
                <Heading as="h6" className="!text-white-A700">
                  Equipment
                </Heading>
              </Link>
              <Link to="/login" rel="noreferrer" className="self-end ml-[23px]">
                <Heading as="h6" className="!text-white-A700">
                  Login
                </Heading>
              </Link>
              <Link
                to="/sign-up"
                rel="noreferrer"
                className="self-end ml-[11px]"
              >
                <Heading as="h6" className="!text-white-A700">
                  Sign up
                </Heading>
              </Link>
              <Link
                to="/cart"
                rel="noreferrer"
                className="self-start ml-[22px]"
              >
                <Heading as="h6" className="!text-white-A700">
                  Cart
                </Heading>
              </Link>
            </div>
          </div>
        </header>
        <div className="w-full mx-auto md:p-5 max-w-[1184px]">
          <div className="flex flex-col items-end gap-[88px] md:gap-[66px] sm:gap-11">
            <div className="flex md:flex-col justify-between items-start w-[88%] md:w-full gap-5">
              <Img
                src="images/img_image_126.png"
                alt="image127_one"
                className="w-[22%] md:w-full mt-[35px] object-cover"
              />
              <div className="flex flex-col items-start w-[42%] md:w-full">
                <CheckBox
                  name="instock"
                  label="In stock"
                  id="instock"
                  className="gap-0.5 p-px text-green-A700_01 tracking-[-0.20px] text-left text-base"
                />
                <Heading
                  size="xl"
                  as="h1"
                  className="mt-2 !text-gray-900 tracking-[-0.20px]"
                >
                  Weight training barbell kit - 10kg
                </Heading>
                <div className="flex w-[85%] md:w-full mt-9">
                  <div className="flex items-center w-full">
                    <RatingBar
                      value={1}
                      isEditable={true}
                      color="#d4cdc5"
                      activeColor="#ff9017"
                      size={15}
                      className="flex justify-between"
                    />
                    <Text as="p" className="self-start ml-2 !text-yellow-900">
                      9.3
                    </Text>
                    <div className="h-[6px] w-[6px] ml-2.5 bg-gray-300_02 flex-1 rounded-[3px]" />
                    <div className="flex ml-3 gap-[9px]">
                      <Img
                        src="images/img_user.svg"
                        alt="user_one"
                        className="h-[20px] w-[20px]"
                      />
                      <Text as="p" className="self-start !text-gray-600">
                        32 reviews
                      </Text>
                    </div>
                    <div className="h-[6px] w-[6px] ml-2 bg-gray-300_02 flex-1 rounded-[3px]" />
                    <Img
                      src="images/img_icon_shopping_basket.svg"
                      alt="iconshopping"
                      className="h-[20px] w-[20px] ml-[7px]"
                    />
                    <Text as="p" className="ml-[9px] !text-gray-600">
                      154 sold
                    </Text>
                  </div>
                </div>
                <div className="flex self-stretch items-center mt-[11px] p-3 bg-orange-50">
                  <div className="flex flex-col self-end items-start ml-1 gap-[5px]">
                    <Heading size="lg" as="h2" className="!text-red-500">
                      $98.00
                    </Heading>
                    <Text size="xs" as="p" className="!text-gray-700_01">
                      50-100 pcs
                    </Text>
                  </div>
                  <div className="self-end h-[44px] w-px ml-[42px] bg-gray-400" />
                  <div className="flex flex-col self-end items-start ml-[9px] gap-[5px]">
                    <Heading size="lg" as="h3" className="!text-gray-900">
                      $90.00
                    </Heading>
                    <Text size="xs" as="p" className="!text-gray-700_01">
                      100-700 pcs
                    </Text>
                  </div>
                  <div className="self-end h-[44px] w-px ml-10 bg-gray-400" />
                  <div className="flex flex-col self-end items-start ml-[9px] gap-[5px]">
                    <Heading
                      size="lg"
                      as="h4"
                      className="self-center !text-gray-900"
                    >
                      $78.00
                    </Heading>
                    <Text size="xs" as="p" className="!text-gray-700_01">
                      700+ pcs
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col w-[77%] md:w-full mt-5 border-gray-300 border-b-[0.5px] border-solid">
                  <div className="flex justify-between w-[67%] md:w-full gap-5 flex-wrap">
                    <Text as="p" className="self-start !text-blue_gray-300_01">
                      Price:{" "}
                    </Text>
                    <Text as="p" className="self-end">
                      Negotiable
                    </Text>
                  </div>
                  <div className="flex justify-between w-[78%] md:w-full mt-[29px] gap-5 flex-wrap">
                    <Text as="p" className="self-end !text-blue_gray-300_01">
                      Type:{" "}
                    </Text>
                    <Text as="p" className="self-start">
                      <span className="text-gray-800">Classic &nbsp;</span>
                      <span className="text-gray-800 font-bold">barbell</span>
                    </Text>
                  </div>
                  <div className="flex justify-between w-[73%] md:w-full mt-[13px] gap-5 flex-wrap">
                    <Text as="p" className="!text-blue_gray-300_01">
                      Material:{" "}
                    </Text>
                    <Text as="p">steel material</Text>
                  </div>
                  <div className="flex justify-between w-[71%] md:w-full mt-3.5 gap-5 flex-wrap">
                    <Text as="p" className="self-end !text-blue_gray-300_01">
                      Design:{" "}
                    </Text>
                    <Text as="p" className="self-start">
                      Modern nice
                    </Text>
                  </div>
                  <div className="flex items-start mt-[29px] gap-7">
                    <Text as="p" className="!text-blue_gray-300_01">
                      Customization:{" "}
                    </Text>
                    <Text as="p" className="w-[63%]">
                      <span className="text-gray-800">
                        <>
                          Customized logo and <br />
                          design&nbsp;
                        </>
                      </span>
                      <span className="text-gray-800">custom packages</span>
                    </Text>
                  </div>
                  <div className="flex justify-between w-[74%] md:w-full mt-3.5 gap-5 flex-wrap">
                    <Text as="p" className="self-start !text-blue_gray-300_01">
                      Protection:{" "}
                    </Text>
                    <Text as="p" className="self-end">
                      Refund Policy
                    </Text>
                  </div>
                  <div className="flex justify-between w-[89%] md:w-full mt-[15px] gap-5 flex-wrap">
                    <Text as="p" className="!text-blue_gray-300_01">
                      Warranty:{" "}
                    </Text>
                    <Text as="p">2 years full warranty </Text>
                  </div>
                </div>
              </div>
              <Link to="/shoppingcart">
                <Button
                  color="red_700"
                  size="xs"
                  shape="round"
                  className="mt-[157px] sm:px-5 font-medium min-w-[248px]"
                >
                  Add to Cart
                </Button>
              </Link>
            </div>
            <div className="flex md:flex-col self-stretch mr-6 gap-[60px] md:mr-0">
              <div className="flex flex-col items-start w-full">
                <Img
                  src="images/img_image_118_331x228.png"
                  alt="image"
                  className="w-full md:h-auto object-cover rounded-[21px]"
                />
                <Text
                  as="p"
                  className="w-[79%] md:w-full mt-[27px] !text-gray-800_01 !font-sairacondensed capitalize"
                >
                  PowerMax Fitness GH-450P Multi Function Home Gym/Multi Gym
                  With Punching Bag, Black,Red
                </Text>
                <a href="#" className="mt-[-2px] relative">
                  <Text
                    size="xl"
                    as="p"
                    className="!text-red-800 !font-sairacondensed uppercase"
                  >
                    <span className="text-red-800">$</span>
                    <span className="text-red-800 text-[35px]">
                      &nbsp;469.00
                    </span>
                  </Text>
                </a>
              </div>
              <div className="flex flex-col items-start w-full">
                <Img
                  src="images/img_image_96.png"
                  alt="imageninetysix"
                  className="h-[331px] w-full md:h-auto object-cover rounded-[21px]"
                />
                <Text
                  as="p"
                  className="w-[82%] md:w-full mt-[27px] ml-[9px] md:ml-0 !text-gray-800_01 !font-sairacondensed capitalize"
                >
                  PowerMax Fitness GH-450P Multi Function Home Gym/Multi Gym
                  With Punching Bag, Black,Red
                </Text>
                <a href="#" className="ml-[9px] md:ml-0">
                  <Text
                    size="xl"
                    as="p"
                    className="!text-red-800 !font-sairacondensed uppercase"
                  >
                    <span className="text-red-800">$</span>
                    <span className="text-red-800 text-[35px]">
                      &nbsp;469.00
                    </span>
                  </Text>
                </a>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-col items-start gap-[38px]">
                  <Img
                    src="images/img_image_93.png"
                    alt="imageninetythre"
                    className="w-full md:h-auto object-cover rounded-[21px]"
                  />
                  <div className="h-[154px] w-[79%] relative">
                    <a
                      href="#"
                      className="bottom-[-0.59px] left-[0.00px] m-auto absolute"
                    >
                      <Text
                        size="xl"
                        as="p"
                        className="!text-red-800 !font-sairacondensed uppercase"
                      >
                        <span className="text-red-800">$</span>
                        <span className="text-red-800 text-[35px]">
                          &nbsp;469.00
                        </span>
                      </Text>
                    </a>
                    <div className="w-full top-[0.00px] right-0 left-0 m-auto absolute">
                      <Text
                        as="p"
                        className="!text-gray-800_01 !font-sairacondensed capitalize"
                      >
                        PowerMax Fitness GH-450P Multi Function Home Gym/Multi
                        Gym With Punching Bag, Black,Red
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start w-full">
                <Img
                  src="images/img_image_116_331x228.png"
                  alt="image116_one"
                  className="w-full md:h-auto ml-[11px] md:ml-0 object-cover rounded-[21px]"
                />
                <Text
                  as="p"
                  className="w-[79%] md:w-full mt-[38px] ml-[11px] md:ml-0 !text-gray-800_01 !font-sairacondensed capitalize z-[1]"
                >
                  PowerMax Fitness GH-450P Multi Function Home Gym/Multi Gym
                  With Punching Bag, Black,Red
                </Text>
                <a href="#" className="mt-[-2px] relative">
                  <Text
                    size="xl"
                    as="p"
                    className="!text-red-800 !font-sairacondensed uppercase"
                  >
                    $ 469.00
                  </Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
