import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img, Input } from "../../components";
import { Link } from "react-router-dom";

export default function CheckOutPage() {
  return (
    <>
      <Helmet>
        <title>Brave Stone</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col w-full pb-[389px] gap-[71px] md:gap-[53px] md:pb-5 sm:gap-[35px] border-black-900 border border-solid bg-white-A700">
        <header className="flex sm:flex-col justify-between items-center gap-5 p-[37px] sm:p-5 bg-black-900">
          <Heading
            size="3xl"
            as="h1"
            className="mt-[11px] mb-3.5 ml-1 md:ml-0 !text-white-A700"
          >
            <Link to="/">Brave Stone</Link>
          </Heading>
          <div className="flex mt-[18px] gap-5 flex-wrap">
            <Link to="/" rel="noreferrer" className="self-start">
              <h6 className="text-white-A700">Home</h6>
            </Link>
            <Link to="/equipmentcategory" rel="noreferrer" className="self-end">
              <Heading as="h6" className="!text-white-A700">
                Equipment
              </Heading>
            </Link>

            <Link to="/login" rel="noreferrer" className="self-end">
              <Heading as="h6" className="!text-white-A700">
                Login
              </Heading>
            </Link>
            <Link to="/sign-up" rel="noreferrer" className="self-end">
              <Heading as="h6" className="!text-white-A700">
                Sign up
              </Heading>
            </Link>
            <Link to="/cart" rel="noreferrer" className="self-start">
              <Heading as="h6" className="!text-white-A700">
                Cart
              </Heading>
            </Link>
          </div>
        </header>
        <div className="flex flex-col gap-[62px] sm:gap-[31px]">
          <div className="flex flex-col items-start w-full mx-auto md:p-5 max-w-[1308px]">
            <Heading size="2xl" as="h1" className="text-center">
              Shipping Address
            </Heading>
            <div className="flex md:flex-col items-start w-[83%] md:w-full mt-[7px]">
              <Text
                as="p"
                className="w-[82%] md:w-full !text-black-900 !font-light leading-[30px]"
              >
                <>
                  We love hearing from you, our Shop customers.
                  <br />
                  Please contact us and we will make sure to get back to you as
                  soon as we possibly can.
                </>
              </Text>
              <Heading
                size="xl"
                as="h2"
                className="mt-1 ml-[-28px] md:ml-0 relative"
              >
                Order Summary
              </Heading>
            </div>
            <div className="flex md:flex-col self-stretch justify-between items-start mt-[9px] gap-5">
              <div className="flex flex-col w-[65%] md:w-full mt-[11px] gap-[11px]">
                <div className="flex md:flex-col gap-7">
                  <div className="flex flex-col items-start w-full pt-2 gap-[9px]">
                    <Heading size="xs" as="h3">
                      <span className="text-black-900">First Name&nbsp;</span>
                      <span className="text-red_700_01">*</span>
                    </Heading>
                    <Input
                      shape="round"
                      type="text"
                      name="firstName"
                      placeholder={`Your First Name`}
                      className="sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start w-full pt-[9px] gap-2">
                    <Heading size="xs" as="h4">
                      <span className="text-black-900">Last Name&nbsp;</span>
                      <span className="text-red_700_01">*</span>
                    </Heading>
                    <Input
                      shape="round"
                      type="text"
                      name="lastName"
                      placeholder={`Your Last Name`}
                      className="sm:pr-5"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start w-[48%] md:w-full pt-[9px] gap-2">
                  <Heading size="xs" as="h5">
                    <span className="text-black-900">Phone Number</span>
                    <span className="text-red-700">&nbsp;*</span>
                  </Heading>
                  <Input
                    shape="round"
                    type="number"
                    name="phoneNumber"
                    placeholder={`Your Phone Number`}
                    className="sm:pr-5"
                  />
                </div>
                <div className="flex md:flex-col gap-7">
                  <div className="flex flex-col items-start w-full pt-[9px] gap-2">
                    <Heading size="xs" as="h6">
                      <span className="text-black-900">Government&nbsp;</span>
                      <span className="text-red_700_01">*</span>
                    </Heading>
                    <Input
                      shape="round"
                      name="your_name"
                      placeholder={`Your Government`}
                      className="sm:pr-5"
                    />
                  </div>
                  <div className="flex flex-col items-start w-full pt-2.5 gap-[7px]">
                    <Heading size="xs" as="p">
                      <span className="text-black-900">City&nbsp;</span>
                      <span className="text-red_700_01">*</span>
                    </Heading>
                    <Input
                      shape="round"
                      name="city"
                      placeholder={`Your City`}
                      className="sm:pr-5"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start pt-[9px] gap-2">
                  <Heading size="xs" as="p">
                    <span className="text-black-900">Street&nbsp;</span>
                    <span className="text-red-700">*</span>
                  </Heading>
                  <Input
                    shape="round"
                    name="your_phone"
                    placeholder={`Your Street`}
                    className="sm:pr-5"
                  />
                </div>
              </div>
              <div className="w-[30%] md:w-full">
                <div className="flex justify-between items-center gap-5">
                  <Text size="xs" as="p" className="!text-black-900">
                    2 Items in Cart
                  </Text>
                  <Img
                    src="images/img_frame_97.svg"
                    alt="image"
                    className="self-end h-[14px] mb-0.5"
                  />
                </div>
                <div className="flex flex-col mt-[22px] gap-[21px]">
                  <div className="flex sm:flex-col items-center gap-[15px] flex-1">
                    <Img
                      src="images/img_image_127.png"
                      alt="image"
                      className="self-start w-[62px] sm:w-full object-cover"
                    />
                    <div className="flex flex-col items-start sm:self-stretch flex-1">
                      <Text
                        as="p"
                        className="!text-gray-900 !font-inter !font-medium leading-[22px]"
                      >
                        SportQ Cement Barbell Set Adjustable Weights Set Home
                      </Text>
                      <Heading size="s" as="p" className="!text-blue_gray-300">
                        <span className="text-blue_gray-300 font-normal">
                          Qty&nbsp;
                        </span>
                        <span className="text-blue_gray-300">1</span>
                      </Heading>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-center gap-[15px] flex-1">
                    <div className="self-start w-[17%] sm:w-full bg-white-A700">
                      <Img
                        src="images/img_image_129_62x62.png"
                        alt="image129_one"
                        className="h-[62px] w-full md:h-auto object-cover"
                      />
                    </div>
                    <div className="flex flex-col sm:self-stretch flex-1">
                      <Text
                        as="p"
                        className="!text-gray-900 !font-inter !font-medium z-[1] leading-[22px]"
                      >
                        SportQ Cement Barbell Set Adjustable Weights Set Home
                      </Text>
                      <div className="flex gap-3 flex-wrap">
                        <Heading
                          size="s"
                          as="p"
                          className="!text-blue_gray-300"
                        >
                          <span className="text-blue_gray-300 font-normal">
                            Qty&nbsp;
                          </span>
                          <span className="text-blue_gray-300">1</span>
                        </Heading>
                        <Heading size="s" as="p" className="self-start">
                          $680.00
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[43px]">
                  <div className="flex justify-between gap-5 flex-wrap">
                    <Heading size="xs" as="p">
                      Subtotal
                    </Heading>
                    <Heading size="xs" as="p" className="text-right">
                      $710.00
                    </Heading>
                  </div>
                  <div className="flex justify-between mt-[18px] gap-5 flex-wrap">
                    <Heading size="xs" as="p" className="self-end">
                      Shipping{" "}
                    </Heading>
                    <Heading size="xs" as="p" className="self-start text-right">
                      $21.00
                    </Heading>
                  </div>
                  <div className="flex justify-between mt-[50px] gap-5 flex-wrap">
                    <Heading size="xs" as="p">
                      Tax
                    </Heading>
                    <Heading size="xs" as="p" className="text-right">
                      $1.91
                    </Heading>
                  </div>
                  <div className="flex justify-between mt-[15px] gap-5 flex-wrap">
                    <Heading size="xs" as="p">
                      GST (10%)
                    </Heading>
                    <Heading size="xs" as="p" className="text-right">
                      $1.91
                    </Heading>
                  </div>
                  <div className="flex justify-between items-center mt-[13px] gap-5 flex-wrap">
                    <Heading size="xs" as="p">
                      Order Total
                    </Heading>
                    <Heading
                      size="lg"
                      as="h6"
                      className="text-right !font-semibold"
                    >
                      $734.83
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/thankyou">
              <Button
                size="sm"
                className="self-end mt-[67px] sm:px-5 !text-white-A700 font-semibold min-w-[180px] rounded-[29px]"
              >
                Submit
              </Button>
            </Link>
            <Link to="/">
              <Text
                size="md"
                as="p"
                className="self-end mt-[19px] mr-[9px] md:mr-0 !text-black-900 !font-outfit text-center"
              >
                &lt; Return to Shopping
              </Text>
            </Link>
          </div>
          <div className="flex md:flex-col gap-[31px] p-[45px] md:p-5 bg-gray-50">
            <div className="flex flex-col items-center w-[24%] md:w-full mt-[15px] ml-[245px] gap-6 md:mt-0 md:ml-0">
              <Button shape="round" className="w-[65px]">
                <Img src="images/img_bx_bx_support.svg" />
              </Button>
              <div className="flex flex-col self-stretch items-center gap-[9px]">
                <Heading size="lg" as="h2" className="text-center">
                  Product Support
                </Heading>
                <Text
                  size="xs"
                  as="p"
                  className="text-center opacity-0.7 leading-[140%]"
                >
                  Up to 3 years on-site warranty available for your peace of
                  mind.
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center w-[20%] md:w-full gap-[21px]">
              <Button shape="round" className="w-[65px]">
                <Img src="images/img_ri_account_pin_circle_fill.svg" />
              </Button>
              <div className="flex flex-col self-stretch items-center gap-3">
                <Heading size="lg" as="h3" className="text-center">
                  Personal Account
                </Heading>
                <Text
                  size="xs"
                  as="p"
                  className="text-center opacity-0.7 leading-[140%]"
                >
                  With big discounts, free delivery and a dedicated support
                  specialist.
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center w-[20%] md:w-full gap-[23px]">
              <Button shape="round" className="w-[65px]">
                <Img src="images/img_entypo_price_tag.svg" />
              </Button>
              <div className="flex flex-col self-stretch items-center gap-2.5">
                <Heading size="lg" as="h4" className="text-center">
                  Amazing Savings
                </Heading>
                <Text
                  size="xs"
                  as="p"
                  className="text-center opacity-0.7 leading-[140%]"
                >
                  Up to 70% off new Products, you can be sure of the best price.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
