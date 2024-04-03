import React from "react";
import { Helmet } from "react-helmet";
import { Text, RatingBar, Heading, OtherBtn, Img } from "../../components";
import { Link } from "react-router-dom";

export default function EquipmentCategoryPage() {
  return (
    <>
      <Helmet>
        <title>Brave Stone</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col w-full gap-[115px] md:gap-[86px] sm:gap-[57px] border-black-900 border border-solid bg-white-A700">
        <header className="p-[29px] sm:p-5 bg-black-900">
          <div className="flex md:flex-col justify-between items-center w-full mt-3 mb-[17px] gap-5 mx-auto max-w-[1298px]">
            <Heading size="4xl" as="h1" className="!text-white-A700">
              <Link to="/">Brave Stone</Link>
            </Heading>
            <div className="flex self-end mb-1 flex-wrap">
              <Link to="/" rel="noreferrer" className="self-start">
                <h6 className="!text-white-A700">Home</h6>
              </Link>
              <Link
                to="/equipmentcategory"
                rel="noreferrer"
                className="self-end ml-[26px]"
              >
                <Heading as="h6" className="!text-white-A700">
                  Equipment{" "}
                </Heading>
              </Link>
              <Link to="/login" rel="noreferrer" className="self-end ml-[29px]">
                <Heading as="h6" className="!text-white-A700">
                  Login
                </Heading>
              </Link>
              <Link
                to="/sign-up"
                rel="noreferrer"
                className="self-end ml-[18px]"
              >
                <Heading as="h6" className="!text-white-A700">
                  Sign up
                </Heading>
              </Link>
              <Link to="/cart" rel="noreferrer" className="self-start ml-3">
                <Heading as="h6" className="!text-white-A700">
                  Cart
                </Heading>
              </Link>
            </div>
          </div>
        </header>
        <div className="flex flex-col w-full mb-[5px] gap-[33px] mx-auto md:p-5 max-w-[920px]">
          <div className="flex flex-col w-[95%] md:w-full gap-[46px]">
            <Link to="/product">
              <div className="flex justify-center flex-1">
                <div className="flex md:flex-col justify-center items-center w-full gap-[27px]">
                  <div className="w-[21%] md:w-full mt-1 bg-white-A700">
                    <Img
                      src="images/img_image_126.png"
                      alt="image"
                      className="h-[180px] w-full md:h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start md:self-stretch flex-1">
                    <div className="flex self-end items-center">
                      <OtherBtn shape="square" className="w-[40px]">
                        <Img src="images/img_cart.svg" />
                      </OtherBtn>
                      <Img
                        src="images/defaultNoData.png"
                        alt="image_one"
                        className="self-end h-px mb-4 ml-[-4px] relative"
                      />
                      <OtherBtn
                        shape="round"
                        className="w-[40px] ml-[15px] border-gray-300_01 border border-solid"
                      >
                        <Img src="images/img_favorite.svg" />
                      </OtherBtn>
                    </div>
                    <div className="flex items-center mt-0.5 gap-[7px] flex-wrap">
                      <Heading
                        size="xl"
                        as="h1"
                        className="!text-gray-900 tracking-[-0.20px]"
                      >
                        $998.00
                      </Heading>
                      <Heading
                        as="h2"
                        className="!text-blue_gray-300_01 !font-semibold line-through"
                      >
                        $1128.00
                      </Heading>
                    </div>
                    <div className="flex items-start w-[51%] md:w-full mt-[5px]">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        color="#d4cdc5"
                        activeColor="#ff9017"
                        size={15}
                        className="flex justify-between flex-1"
                      />
                      <Text as="p" className="ml-1.5 !text-yellow-900">
                        7.5
                      </Text>
                      <div className="h-[6px] w-[6px] mt-1.5 ml-3 bg-gray-300_01 rounded-[3px]" />
                      <Text as="p" className="ml-[9px] !text-blue_gray-300_01">
                        154 orders
                      </Text>
                      <div className="h-[6px] w-[6px] mt-1.5 ml-[9px] bg-gray-300_01 rounded-[3px]" />
                      <Text as="p" className="ml-[9px] !text-green-A700">
                        Free Shipping
                      </Text>
                    </div>
                    <Text
                      as="p"
                      className="w-[90%] md:w-full mt-2.5 tracking-[-0.20px] leading-6"
                    >
                      <>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod
                        <br />
                        tempor incididunt ut labore et dolore magna aliqua
                      </>
                    </Text>
                    <Text
                      as="p"
                      className="mt-[7px] !text-blue-A400 !font-medium"
                    >
                      View details
                    </Text>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product">
              <div className="flex justify-center flex-1">
                <div className="flex md:flex-col justify-center items-center w-full gap-[27px]">
                  <Img
                    src="images/img_image_127.png"
                    alt="image127_one"
                    className="w-[180px] md:w-full mt-1 object-cover"
                  />
                  <div className="flex flex-col items-start md:self-stretch flex-1">
                    <div className="flex sm:flex-col self-stretch justify-between items-start gap-5">
                      <a href="#" className="mt-[5px]">
                        <Text as="p" className="!text-gray-900 !font-medium">
                          SportQ Cement Barbell Set Adjustable Weights Set Home
                        </Text>
                      </a>
                      <div className="flex items-center">
                        <OtherBtn shape="square" className="w-[40px]">
                          <Img src="images/img_cart_red_700.svg" />
                        </OtherBtn>
                        <Img
                          src="images/defaultNoData.png"
                          alt="vector_one"
                          className="self-end mb-4 ml-[-4px] relative object-cover"
                        />
                        <OtherBtn
                          shape="round"
                          className="w-[40px] ml-[15px] border-gray-300_01 border border-solid"
                        >
                          <Img src="images/img_favorite.svg" />
                        </OtherBtn>
                      </div>
                    </div>
                    <div className="flex items-center mt-0.5 gap-[7px] flex-wrap">
                      <Heading
                        size="xl"
                        as="h3"
                        className="!text-gray-900 tracking-[-0.20px]"
                      >
                        $998.00
                      </Heading>
                      <Heading
                        as="h4"
                        className="!text-blue_gray-300_01 !font-semibold line-through"
                      >
                        $1128.00
                      </Heading>
                    </div>
                    <div className="flex items-start w-[51%] md:w-full mt-[5px]">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        color="#d4cdc5"
                        activeColor="#ff9017"
                        size={15}
                        className="flex justify-between flex-1"
                      />
                      <Text as="p" className="ml-1.5 !text-yellow-900">
                        7.5
                      </Text>
                      <div className="h-[6px] w-[6px] mt-1.5 ml-3 bg-gray-300_01 rounded-[3px]" />
                      <Text as="p" className="ml-[9px] !text-blue_gray-300_01">
                        154 orders
                      </Text>
                      <div className="h-[6px] w-[6px] mt-1.5 ml-[9px] bg-gray-300_01 rounded-[3px]" />
                      <Text as="p" className="ml-[9px] !text-green-A700">
                        Free Shipping
                      </Text>
                    </div>
                    <Text
                      as="p"
                      className="w-[90%] md:w-full mt-2.5 tracking-[-0.20px] leading-6"
                    >
                      <>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod
                        <br />
                        tempor incididunt ut labore et dolore magna aliqua
                      </>
                    </Text>
                    <Text
                      as="p"
                      className="mt-[7px] !text-blue-A400 !font-medium"
                    >
                      View details
                    </Text>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product">
              <div className="flex justify-center flex-1">
                <div className="flex md:flex-col justify-center items-center w-full gap-[27px]">
                  <div className="w-[21%] md:w-full mt-1 bg-white-A700">
                    <Img
                      src="images/img_image_128.png"
                      alt="image128_one"
                      className="h-[180px] w-full md:h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start md:self-stretch flex-1">
                    <div className="flex sm:flex-col self-stretch justify-between items-start gap-5">
                      <a href="#" className="mt-1.5">
                        <Text as="p" className="!text-gray-900 !font-medium">
                          SportQ Cement Barbell Set Adjustable Weights Set Home
                        </Text>
                      </a>
                      <div className="flex items-center">
                        <OtherBtn shape="square" className="w-[40px]">
                          <Img src="images/img_cart.svg" />
                        </OtherBtn>
                        <Img
                          src="images/defaultNoData.png"
                          alt="vector_one"
                          className="self-end mb-4 ml-[-4px] relative object-cover"
                        />
                        <OtherBtn
                          shape="round"
                          className="w-[40px] ml-[15px] border-gray-300_01 border border-solid"
                        >
                          <Img src="images/img_favorite.svg" />
                        </OtherBtn>
                      </div>
                    </div>
                    <div className="flex items-center mt-0.5 gap-[7px] flex-wrap">
                      <Heading
                        size="xl"
                        as="h5"
                        className="!text-gray-900 tracking-[-0.20px]"
                      >
                        $998.00
                      </Heading>
                      <Heading
                        as="h6"
                        className="!text-blue_gray-300_01 !font-semibold line-through"
                      >
                        $1128.00
                      </Heading>
                    </div>
                    <div className="flex items-start w-[51%] md:w-full mt-[5px]">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        color="#d4cdc5"
                        activeColor="#ff9017"
                        size={15}
                        className="flex justify-between flex-1"
                      />
                      <Text as="p" className="ml-1.5 !text-yellow-900">
                        7.5
                      </Text>
                      <div className="h-[6px] w-[6px] mt-1.5 ml-3 bg-gray-300_01 rounded-[3px]" />
                      <Text as="p" className="ml-[9px] !text-blue_gray-300_01">
                        154 orders
                      </Text>
                      <div className="h-[6px] w-[6px] mt-1.5 ml-[9px] bg-gray-300_01 rounded-[3px]" />
                      <Text as="p" className="ml-[9px] !text-green-A700">
                        Free Shipping
                      </Text>
                    </div>
                    <Text
                      as="p"
                      className="w-[90%] md:w-full mt-2.5 tracking-[-0.20px] leading-6"
                    >
                      <>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod
                        <br />
                        tempor incididunt ut labore et dolore magna aliqua
                      </>
                    </Text>
                    <Text
                      as="p"
                      className="mt-[7px] !text-blue-A400 !font-medium"
                    >
                      View details
                    </Text>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-[9px]">
            <Link to="/product">
              <div className="flex justify-center ml-[22px] md:ml-0 flex-1">
                <div className="flex md:flex-col justify-center items-center w-full gap-[5px]">
                  <div className="w-[21%] md:w-full mt-1">
                    <div className="bg-white-A700">
                      <Img
                        src="images/img_image_129.png"
                        alt="image"
                        className="h-[180px] w-full md:h-auto object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:self-stretch gap-0.5 flex-1">
                    <div className="flex sm:flex-col justify-between items-start gap-5">
                      <a href="#" className="mt-[5px]">
                        <Text as="p" className="!text-gray-900 !font-medium">
                          SportQ Cement Barbell Set Adjustable Weights Set Home
                        </Text>
                      </a>
                      <div className="flex items-center">
                        <OtherBtn shape="square" className="w-[40px]">
                          <Img src="images/img_cart.svg" />
                        </OtherBtn>
                        <Img
                          src="images/defaultNoData.png"
                          alt="image_one"
                          className="self-end mb-4 ml-[-4px] relative object-cover"
                        />
                        <OtherBtn
                          shape="round"
                          className="w-[40px] ml-[15px] border-gray-300_01 border border-solid"
                        >
                          <Img src="images/img_favorite.svg" />
                        </OtherBtn>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-[90%] md:w-full ml-[22px] gap-2 md:ml-0">
                      <div className="flex flex-col w-[57%] md:w-full gap-[5px]">
                        <div className="flex items-center gap-[7px] flex-wrap">
                          <Heading
                            size="xl"
                            as="h2"
                            className="!text-gray-900 tracking-[-0.20px]"
                          >
                            $998.00
                          </Heading>
                          <Heading
                            as="h3"
                            className="!text-blue_gray-300_01 !font-semibold line-through"
                          >
                            $1128.00
                          </Heading>
                        </div>
                        <div className="flex items-start">
                          <RatingBar
                            value={1}
                            isEditable={true}
                            color="#d4cdc5"
                            activeColor="#ff9017"
                            size={15}
                            className="flex justify-between flex-1"
                          />
                          <Text as="p" className="ml-1.5 !text-yellow-900">
                            7.5
                          </Text>
                          <div className="h-[6px] w-[6px] mt-1.5 ml-3 bg-gray-300_01 rounded-[3px]" />
                          <Text
                            as="p"
                            className="ml-[9px] !text-blue_gray-300_01"
                          >
                            154 orders
                          </Text>
                          <div className="h-[6px] w-[6px] mt-1.5 ml-[9px] bg-gray-300_01 rounded-[3px]" />
                          <Text as="p" className="ml-[9px] !text-green-A700">
                            Free Shipping
                          </Text>
                        </div>
                      </div>
                      <Text as="p" className="tracking-[-0.20px] leading-6">
                        <>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod
                          <br />
                          tempor incididunt ut labore et dolore magna aliqua
                        </>
                      </Text>
                      <Text as="p" className="!text-blue-A400 !font-medium">
                        View details
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product">
              <div className="flex justify-center p-5 flex-1">
                <div className="flex md:flex-col justify-center items-center w-full mb-1.5 gap-[5px]">
                  <div className="w-[21%] md:w-full mt-1 bg-white-A700">
                    <Img
                      src="images/img_image_118.png"
                      alt="image118_one"
                      className="h-[180px] w-full md:h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col md:self-stretch gap-0.5 flex-1">
                    <div className="flex sm:flex-col justify-between items-start gap-5">
                      <a href="#" className="mt-[5px]">
                        <Text as="p" className="!text-gray-900 !font-medium">
                          SportQ Cement Barbell Set Adjustable Weights Set Home
                        </Text>
                      </a>
                      <div className="flex items-center">
                        <OtherBtn shape="square" className="w-[40px]">
                          <Img src="images/img_cart.svg" />
                        </OtherBtn>
                        <Img
                          src="images/defaultNoData.png"
                          alt="vector_one"
                          className="self-end mb-4 ml-[-4px] relative object-cover"
                        />
                        <OtherBtn
                          shape="round"
                          className="w-[40px] ml-[15px] border-gray-300_01 border border-solid"
                        >
                          <Img src="images/img_favorite.svg" />
                        </OtherBtn>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-[90%] md:w-full ml-[22px] gap-2 md:ml-0">
                      <div className="flex flex-col w-[57%] md:w-full gap-[5px]">
                        <div className="flex items-center gap-[7px] flex-wrap">
                          <Heading
                            size="xl"
                            as="h4"
                            className="!text-gray-900 tracking-[-0.20px]"
                          >
                            $998.00
                          </Heading>
                          <Heading
                            as="h5"
                            className="!text-blue_gray-300_01 !font-semibold line-through"
                          >
                            $1128.00
                          </Heading>
                        </div>
                        <div className="flex items-start">
                          <RatingBar
                            value={1}
                            isEditable={true}
                            color="#d4cdc5"
                            activeColor="#ff9017"
                            size={15}
                            className="flex justify-between flex-1"
                          />
                          <Text as="p" className="ml-1.5 !text-yellow-900">
                            7.5
                          </Text>
                          <div className="h-[6px] w-[6px] mt-1.5 ml-3 bg-gray-300_01 rounded-[3px]" />
                          <Text
                            as="p"
                            className="ml-[9px] !text-blue_gray-300_01"
                          >
                            154 orders
                          </Text>
                          <div className="h-[6px] w-[6px] mt-1.5 ml-[9px] bg-gray-300_01 rounded-[3px]" />
                          <Text as="p" className="ml-[9px] !text-green-A700">
                            Free Shipping
                          </Text>
                        </div>
                      </div>
                      <Text as="p" className="tracking-[-0.20px] leading-6">
                        <>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod
                          <br />
                          tempor incididunt ut labore et dolore magna aliqua
                        </>
                      </Text>
                      <Text as="p" className="!text-blue-A400 !font-medium">
                        View details
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/product">
              <div className="flex justify-center ml-8 md:ml-0 flex-1">
                <div className="flex md:flex-col justify-center items-center w-full gap-[5px]">
                  <div className="w-[21%] md:w-full mt-1 bg-white-A700">
                    <Img
                      src="images/img_image_116.png"
                      alt="image116_one"
                      className="h-[180px] w-full md:h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start md:self-stretch flex-1">
                    <div className="flex sm:flex-col self-stretch justify-between items-start gap-5">
                      <a href="#" className="mt-[5px]">
                        <Text as="p" className="!text-gray-900 !font-medium">
                          SportQ Cement Barbell Set Adjustable Weights Set Home
                        </Text>
                      </a>
                      <div className="flex items-center">
                        <OtherBtn shape="square" className="w-[40px]">
                          <Img src="images/img_cart.svg" />
                        </OtherBtn>
                        <Img
                          src="images/defaultNoData.png"
                          alt="vector_one"
                          className="self-end mb-4 ml-[-4px] relative object-cover"
                        />
                        <OtherBtn
                          shape="round"
                          className="w-[40px] ml-[15px] border-gray-300_01 border border-solid"
                        >
                          <Img src="images/img_favorite.svg" />
                        </OtherBtn>
                      </div>
                    </div>
                    <div className="flex flex-col w-[51%] md:w-full mt-0.5 ml-[22px] gap-[5px] md:ml-0">
                      <div className="flex items-center gap-[7px] flex-wrap">
                        <Heading
                          size="xl"
                          as="h6"
                          className="!text-gray-900 tracking-[-0.20px]"
                        >
                          $998.00
                        </Heading>
                        <Heading
                          as="h6"
                          className="!text-blue_gray-300_01 !font-semibold line-through"
                        >
                          $1128.00
                        </Heading>
                      </div>
                      <div className="flex items-start">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          color="#d4cdc5"
                          activeColor="#ff9017"
                          size={15}
                          className="flex justify-between flex-1"
                        />
                        <Text as="p" className="ml-1.5 !text-yellow-900">
                          7.5
                        </Text>
                        <div className="h-[6px] w-[6px] mt-1.5 ml-3 bg-gray-300_01 rounded-[3px]" />
                        <Text
                          as="p"
                          className="ml-[9px] !text-blue_gray-300_01"
                        >
                          154 orders
                        </Text>
                        <div className="h-[6px] w-[6px] mt-1.5 ml-[9px] bg-gray-300_01 rounded-[3px]" />
                        <Text as="p" className="ml-[9px] !text-green-A700">
                          Free Shipping
                        </Text>
                      </div>
                    </div>
                    <Text
                      as="p"
                      className="w-[90%] md:w-full mt-2.5 ml-[22px] md:ml-0 tracking-[-0.20px] leading-6"
                    >
                      <>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod
                        <br />
                        tempor incididunt ut labore et dolore magna aliqua
                      </>
                    </Text>
                    <Text
                      as="p"
                      className="mt-[7px] ml-[22px] md:ml-0 !text-blue-A400 !font-medium"
                    >
                      View details
                    </Text>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
