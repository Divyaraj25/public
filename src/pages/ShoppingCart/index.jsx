import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Img, Text } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import ShoppingCartRowbxbxsupport from "../../components/ShoppingCartRowbxbxsupport";
import { createColumnHelper } from "@tanstack/react-table";
import { Link } from "react-router-dom";

const tableData = [
  {
    item: "SportQ Cement Barbell Set Adjustable Weights Set Home",
    price: "$650",
    subtotal: "$650",
  },
];

export default function ShoppingCartPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("item", {
        cell: (info) => (
          <div className="flex sm:flex-col justify-between items-end md:self-stretch gap-5 flex-1">
            <Img
              src="images/img_image_127.png"
              alt="image127_one"
              className="w-[120px] sm:w-full mt-[29px] object-cover"
            />
            <a
              href="#"
              className="w-[62%] sm:w-full mb-[23px] mr-7 sm:mr-0 leading-[22px]"
            >
              <Text as="p" className="!text-gray-900 !font-medium">
                {info?.getValue?.()}
              </Text>
            </a>
          </div>
        ),
        header: (info) => (
          <Heading size="s" as="h2" className="p-px !font-poppins">
            Item
          </Heading>
        ),
        meta: { width: "475px" },
      }),
      tableColumnHelper.accessor("price", {
        cell: (info) => (
          <Heading as="h5" className="!font-poppins text-center !font-semibold">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading size="s" as="h3" className="p-px !font-poppins">
            Price
          </Heading>
        ),
        meta: { width: "190px" },
      }),
      tableColumnHelper.accessor("subtotal", {
        cell: (info) => (
          <Heading as="h6" className="!font-poppins text-center !font-semibold">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading size="s" as="h4" className="p-px !font-poppins">
            Subtotal
          </Heading>
        ),
        meta: { width: "65px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Brave Stone</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col w-full pb-[389px] gap-[90px] md:gap-[67px] md:pb-5 sm:gap-[45px] border-black-900 border border-solid bg-white-A700">
        <header className="p-[26px] sm:p-5 bg-black-900">
          <div className="flex md:flex-col justify-between items-center w-full mt-3 mb-[31px] gap-5 mx-auto max-w-[1362px]">
            <Heading size="4xl" as="h1" className="!text-white-A700">
              <Link to="/">Brave Stone</Link>
            </Heading>
            <div className="flex self-end flex-wrap">
              <Link to="/" rel="noreferrer" className="self-start">
                <h6 className="!text-white-A700">Home</h6>
              </Link>
              <Link
                to="/equipmentcategory"
                rel="noreferrer"
                className="self-end ml-[30px]"
              >
                <Heading as="h6" className="!text-white-A700">
                  Equipment{" "}
                </Heading>
              </Link>
              <Link to="/login" rel="noreferrer" className="self-end ml-[30px]">
                <Heading as="h6" className="!text-white-A700">
                  Login
                </Heading>
              </Link>

              <Link to="/sign-up" rel="noreferrer" className="self-end ml-3.5">
                <Heading as="h6" className="!text-white-A700">
                  Sign up
                </Heading>
              </Link>
              <Link to="/cart" rel="noreferrer" className="self-start ml-3.5">
                <Heading as="h6" className="!text-white-A700">
                  Cart
                </Heading>
              </Link>
            </div>
          </div>
        </header>
        <div>
          <div className="flex flex-col gap-[211px] md:gap-[158px] sm:gap-[105px] overflow-auto">
            <div className="flex flex-col items-start w-full gap-[25px] mx-auto md:p-5 max-w-[1287px]">
              <Heading size="3xl" as="h1" className="!font-poppins">
                Shopping Cart
              </Heading>
              <div className="flex md:flex-col self-stretch justify-between items-start gap-5">
                <ReactTable
                  size="xs"
                  bodyProps={{ className: "" }}
                  headerProps={{
                    className:
                      "border-blue_gray-100_02 border-b-[0.5px] border-solid flex-wrap",
                  }}
                  rowDataProps={{ className: "md:flex-col" }}
                  className="w-[57%] border-blue_gray-100_02 border-b-[0.5px] border-solid"
                  columns={tableColumns}
                  data={tableData}
                />
                <div className="w-[26%] md:w-full mt-3">
                  <div className="flex flex-col items-start">
                    <Heading
                      size="2xl"
                      as="h4"
                      className="ml-[3px] md:ml-0 !font-poppins"
                    >
                      Summary
                    </Heading>
                    <div className="flex self-stretch justify-between items-center mt-[15px] ml-[3px] gap-5 md:ml-0">
                      <Text
                        size="lg"
                        as="p"
                        className="!text-black-900 !font-poppins"
                      >
                        Estimate Shipping and Tax
                      </Text>
                      <Img
                        src="images/img_frame_97.svg"
                        alt="image"
                        className="h-[15px] w-[15px]"
                      />
                    </div>
                    <Text
                      size="s"
                      as="p"
                      className="w-[74%] md:w-full mt-3 ml-[3px] md:ml-0 !text-gray-700 !font-poppins"
                    >
                      Enter your destination to get a shipping estimate.
                    </Text>
                    <div className="flex self-stretch justify-between items-center mt-[19px] gap-5">
                      <Text
                        size="lg"
                        as="p"
                        className="!text-black-900 !font-poppins"
                      >
                        Apply Discount Code
                      </Text>
                      <Img
                        src="images/img_frame_97.svg"
                        alt="image_one"
                        className="h-[14px] w-[13px]"
                      />
                    </div>
                    <div className="self-stretch mt-6">
                      <div className="flex flex-col gap-[17px]">
                        <div className="h-px bg-blue_gray-100_02" />
                        <div className="flex justify-between gap-5 flex-wrap">
                          <Heading size="xs" as="p" className="!font-poppins">
                            Subtotal
                          </Heading>
                          <Heading
                            size="xs"
                            as="p"
                            className="!font-poppins text-right"
                          >
                            $680
                          </Heading>
                        </div>
                        <div className="flex justify-between gap-5 flex-wrap">
                          <Heading
                            size="xs"
                            as="p"
                            className="self-end !font-poppins"
                          >
                            Shipping{" "}
                          </Heading>
                          <Heading
                            size="xs"
                            as="p"
                            className="self-start !font-poppins text-right"
                          >
                            $21.00
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch mt-[50px]">
                      <div className="flex flex-col gap-[13px]">
                        <div className="flex justify-between gap-5 flex-wrap">
                          <Heading size="xs" as="p" className="!font-poppins">
                            Tax
                          </Heading>
                          <Heading
                            size="xs"
                            as="p"
                            className="!font-poppins text-right"
                          >
                            $1.91
                          </Heading>
                        </div>
                        <div className="flex justify-between gap-5 flex-wrap">
                          <Heading size="xs" as="p" className="!font-poppins">
                            GST (10%)
                          </Heading>
                          <Heading
                            size="xs"
                            as="p"
                            className="!font-poppins text-right"
                          >
                            $1.91
                          </Heading>
                        </div>
                        <div className="flex justify-between items-center gap-5 flex-wrap">
                          <Heading size="xs" as="p" className="!font-poppins">
                            Order Total
                          </Heading>
                          <Heading
                            size="lg"
                            as="h6"
                            className="!font-poppins text-right"
                          >
                            $703
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <Link to="/cart">
                      <Button
                        color="red_700"
                        size="md"
                        className="w-full mt-3.5 sm:px-5 font-poppins font-semibold rounded-[24px]"
                      >
                        Proceed to Checkout
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <ShoppingCartRowbxbxsupport />
          </div>
        </div>
      </div>
    </>
  );
}
