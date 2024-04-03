import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { OtherBtn, OtherText, Input, OtherHeading } from "../../components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // const formData = new FormData();
      // formData.append("email", email);
      // formData.append("password", password);

      // const response = await fetch("http://localhost:3000/login", {
      //   method: "POST",
      //   body: formData,
      // });
      const response = await axios("http://localhost:3000/login", {
        method: "POST",
        data: {
          email,
          password,
        },
      });
      console.log(response);
      // const data = await response.json();
      if (response.status === 200) {
        toast.success("Login successful!");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else if(response.status === 500){
        console.log(response.message);
      }else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Brave Stone</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full pl-[141px] pr-14 py-[141px] md:p-5 bg-red-700">
        <div className="flex flex-col items-start w-[52%] md:w-full mb-[75px] ml-[340px] gap-[45px] md:ml-0">
          <h1>
            {" "}
            <OtherHeading size="5xl" as="h1" className="!font-poppins">
              Sign In
            </OtherHeading>
          </h1>
          <div className="flex flex-col self-stretch items-center ml-[7px] md:ml-0">
            <OtherText
              size="s"
              as="p"
              className="self-start !text-black-900 !font-poly"
            >
              Enter Your Email Address
            </OtherText>
            <Input
              shape="round"
              type="text"
              name="email"
              placeholder={`Username or Email`}
              className="mt-[29px] sm:pr-5"
              value={email}
              // onChange={(e) => console.log("78", e)}
              onChange={(e) => setEmail(e)}
            />
            <div className="flex flex-col self-stretch items-start mt-[102px] gap-[29px]">
              <OtherText size="s" as="p" className="!text-black-900 !font-poly">
                Enter Your Password
              </OtherText>
              <Input
                shape="round"
                type="password"
                name="password"
                placeholder={`Password`}
                className="sm:px-5"
                value={password}
                onChange={(e) => setPassword(e)}
              />
            </div>
            <div className="flex sm:flex-col self-stretch justify-between items-start mt-[75px] gap-5">
              <div className="flex justify-center items-center w-[52%] sm:w-full mt-3.5 gap-3.5">
                <div className="self-end h-[13px] w-[14px] bg-blue_gray-100 rounded-[5px]" />
                <OtherText
                  size="s"
                  as="p"
                  className="!text-black-900 !font-poly"
                >
                  Remember me on this computer
                </OtherText>
              </div>
              <OtherBtn
                size="md"
                className="sm:px-5 text-black-900 font-poly min-w-[153px] rounded-[20px]"
                onClick={handleLogin}
              >
                Sign In
              </OtherBtn>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
