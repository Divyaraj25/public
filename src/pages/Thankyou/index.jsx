import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img } from "../../components";
import { Link } from "react-router-dom";

export default function ThankyouPage() {
  return (
    <>
      <Helmet>
        <title>Brave Stone</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col w-full pb-[335px] gap-[180px] md:gap-[135px] md:pb-5 sm:gap-[90px] border-black-900 border border-solid bg-white-A700">
        <header className="p-[41px] md:p-5 bg-black-900">
          <div className="flex sm:flex-col justify-between items-center w-full gap-5 mx-auto max-w-[1283px]">
            <Heading size="3xl" as="h1" className="!text-white-A700">
              <Link to="/">Brave Stone</Link>
            </Heading>
            <div className="flex mt-2 gap-[15px] flex-wrap">
              <Link to="/" rel="noreferrer" className="self-start">
                <h6 className="text-white-A700">Home</h6>
              </Link>

              <Link
                to="/equipmentcategory"
                rel="noreferrer"
                className="self-end"
              >
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
          </div>
        </header>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col w-full gap-[220px] mx-auto md:gap-[165px] md:p-5 sm:gap-[110px] max-w-[1124px]">
            <Heading
              size="5xl"
              as="h1"
              className="w-[49%] md:w-full !text-red-A700 tracking-[2.72px] !font-sairacondensed uppercase text-center leading-[100%]"
            >
              <span className="text-red-A700">
                <>
                  Empower Yourself
                  <br />
                </>
              </span>
              <span className="text-red_900">
                <>
                  Achieve More
                  <br />
                </>
              </span>
              <span className="text-red-700">Gear Up Now!&nbsp;</span>
            </Heading>
            <div className="flex flex-col items-center ml-1 pb-[13px] gap-[58px] md:ml-0 sm:gap-[29px]">
              <Heading size="6xl" as="h2" className="!font-outfit text-center">
                Thank you!
              </Heading>
              <Text
                size="xl"
                as="p"
                className="!text-black-900 !font-outfit text-center"
              >
                Your order #12649272 has been placed!
              </Text>
              <Text
                size="lg"
                as="p"
                className="!text-black-900 !font-outfit text-center"
              >
                We sent an email to xyz@gmail.com with your order confirmation
                and recipt. If the email hasn’t arrived within two minites,
                please check your spam folder to see if the email was routes
                there{" "}
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col gap-[31px] p-[45px] md:p-5 bg-gray-50">
            <div className="flex flex-col items-center w-[26%] md:w-full mt-[15px] ml-[246px] gap-6 md:mt-0 md:ml-0">
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
            <div className="flex flex-col items-center w-[21%] md:w-full gap-[21px]">
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
            <div className="flex flex-col items-center w-[21%] md:w-full gap-[23px]">
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
