import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Brave Stone</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full pb-[152px] md:pb-5 bg-blue_gray-100">
        <div>
          <div className="flex items-center h-[500px] md:h-auto p-[38px] sm:p-5 bg-[url(/public/images/img_group_3.png)] bg-cover bg-no-repeat">
            <div className="flex flex-col items-end w-[47%] md:w-full mt-[3px] ml-[7px] gap-[172px] md:gap-[129px] md:ml-0 sm:gap-[86px]">
              <header className="flex sm:flex-col justify-between items-center w-full gap-5">
                <Heading
                  size="3xl"
                  as="h1"
                  className="mt-[18px] !text-white-A700"
                >
                  <Link to="/">Brave Stone</Link>
                </Heading>
                <div className="flex gap-4 flex-wrap">
                  <Link to="/" rel="noreferrer" className="self-start">
                    <h6 className="text-white-A700">Home</h6>
                  </Link>
                  <Link
                    to="/equipmentcategory"
                    rel="noreferrer"
                    className="self-start"
                  >
                    <Heading as="h6" className="!text-white-A700">
                      Equipment
                    </Heading>
                  </Link>
                  <Link to="/login" rel="noreferrer" className="self-start">
                    <Heading as="h6" className="!text-white-A700">
                      Login
                    </Heading>
                  </Link>

                  <Link to="/sign-up" rel="noreferrer" className="self-start">
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
              <Heading
                size="5xl"
                as="h1"
                className="w-[91%] md:w-full !text-white-A700 tracking-[2.72px] !font-sairacondensed uppercase text-center leading-[100%]"
              >
                <span className="text-white-A700">
                  <>
                    Empower Yourself
                    <br />
                  </>
                </span>
                <span className="text-white-A700">
                  <>
                    Achieve More
                    <br />
                  </>
                </span>
                <span className="text-red-700">Gear Up Now!&nbsp;</span>
              </Heading>
            </div>
          </div>
          <div className="flex md:flex-col">
            <Img
              src="images/img_rectangle_3.png"
              alt="image"
              className="w-[52%] md:w-full object-cover"
            />
            <div className="flex justify-center w-[48%] md:w-full ml-[-1px] pl-5 py-5 md:p-5 md:ml-0 relative bg-black-900_f2">
              <div className="flex flex-col items-start w-[93%] md:w-full pb-[22px] sm:pb-5">
                <div className="flex sm:flex-col justify-between items-center w-[71%] md:w-full gap-5 border-black-900 border border-solid">
                  <div className="h-[133px] w-[3px] sm:w-[133px] sm:h-[3px] bg-red-700" />
                  <Heading
                    size="4xl"
                    as="h2"
                    className="w-[91%] sm:w-full !text-white-A700 !font-sairacondensed uppercase"
                  >
                    <>
                      Are you ready to
                      <br />
                      get in shape?
                    </>
                  </Heading>
                </div>
                <Text
                  as="p"
                  className="w-[75%] md:w-full !text-white-A700 capitalize"
                >
                  Being physically active can improve your brain health, help
                  manage weight, reduce the risk of disease, strengthen bones
                  and muscles, and improve your ability to do everyday
                  activities. Adults who si
                </Text>
                <Button
                  size="xs"
                  shape="square"
                  className="sm:px-5 font-sairacondensed capitalize font-bold min-w-[95px]"
                >
                  Join now
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col w-full mt-[202px] gap-[102px] mx-auto md:p-5 max-w-[1170px]">
            <Link to="/product">
              <div className="flex flex-col items-start w-full">
                <Img
                  src="images/img_image_130.png"
                  alt="image"
                  className="h-[331px] w-full md:h-auto object-cover rounded-[21px]"
                />
                <Text
                  as="p"
                  className="self-end w-[85%] md:w-full mt-[62px] mr-4 md:mr-0 !text-gray-800 capitalize"
                >
                  PowerMax Fitness GH-450P Multi Function Home Gym/Multi Gym
                  With Punching Bag, Black,Red
                </Text>
                <Text
                  size="2xl"
                  as="p"
                  className="ml-[30px] md:ml-0 !text-red-800 uppercase"
                >
                  <span className="text-red-800">$</span>
                  <span className="text-red-800 text-[35px]">
                    &nbsp;4,469.00
                  </span>
                </Text>
              </div>
            </Link>
            <Link to="/product">
              <div className="flex flex-col items-start w-full">
                <Img
                  src="images/img_image_129.png"
                  alt="image129_one"
                  className="h-[331px] w-full md:h-auto object-cover rounded-[21px]"
                />
                <Text
                  as="p"
                  className="w-[83%] md:w-full mt-[62px] ml-[11px] md:ml-0 !text-gray-800 capitalize"
                >
                  PowerMax Fitness GH-450P Multi Function Home Gym/Multi Gym
                  With Punching Bag, Black,Red
                </Text>
                <Text
                  size="2xl"
                  as="p"
                  className="ml-[9px] md:ml-0 !text-red-800 uppercase"
                >
                  <span className="text-red-800">$</span>
                  <span className="text-red-800 text-[35px]">
                    &nbsp;4,469.00
                  </span>
                </Text>
              </div>
            </Link>
            <Link to="/product">
              <div className="flex flex-col items-start w-full">
                <Img
                  src="images/img_image_128.png"
                  alt="image128_one"
                  className="h-[331px] w-full md:h-auto object-cover rounded-[21px]"
                />
                <Text
                  as="p"
                  className="w-[85%] md:w-full mt-[62px] ml-4 md:ml-0 !text-gray-800 capitalize"
                >
                  PowerMax Fitness GH-450P Multi Function Home Gym/Multi Gym
                  With Punching Bag, Black,Red
                </Text>
                <Text
                  size="2xl"
                  as="p"
                  className="ml-3.5 md:ml-0 !text-red-800 uppercase"
                >
                  <span className="text-red-800">$</span>
                  <span className="text-red-800 text-[35px]">
                    &nbsp;4,469.00
                  </span>
                </Text>
              </div>
            </Link>
            <Link to="/product">
              <div className="flex flex-col items-center w-full">
                <Img
                  src="images/img_image_131.png"
                  alt="image131_one"
                  className="h-[331px] w-full md:h-auto object-cover rounded-[21px]"
                />
                <Text
                  as="p"
                  className="w-[79%] md:w-full mt-[62px] !text-gray-800 capitalize"
                >
                  PowerMax Fitness GH-450P Multi Function Home Gym/Multi Gym
                  With Punching Bag, Black,Red
                </Text>
                <Text
                  size="2xl"
                  as="p"
                  className="self-start ml-[21px] md:ml-0 !text-red-800 uppercase"
                >
                  <span className="text-red-800">$</span>
                  <span className="text-red-800 text-[35px]">
                    &nbsp;4,469.00
                  </span>
                </Text>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
