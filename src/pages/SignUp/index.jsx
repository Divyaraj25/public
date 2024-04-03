import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { OtherBtn, Text, Input, OtherHeading } from "../../components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      // const formData = new FormData();
      // formData.append("email", email);
      // formData.append("username", username);
      // formData.append("contactNumber", contact);
      // formData.append("password", password);
      console.log(email, username, contact, password);
      // const response = await fetch("http://localhost:5080/register", {
      //   method: "POST",
      //   body: formData,
      // });

      const response = await axios("http://localhost:3000/sign-up", {
        method: "POST",
        data: {
          email,
          username,
          contact,
          password,
        },
      })
      // const data = await response.json();
      console.log(response);
      if (response.status === 200) {
        toast.success("Register successful!");
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>sign-up</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex justify-center w-full px-14 py-[113px] md:p-5 bg-red-700">
        <div className="flex flex-col items-start w-[35%] md:w-full mb-2.5">
<h1>            <OtherHeading size="5xl" as="h1" className="!font-poppins">
              Sign UP
            </OtherHeading>
    </h1>
          <Text size="s" as="p" className="mt-4 !text-black-900 !font-poly">
            Enter Your Email{" "}
          </Text>
          <Input
            shape="round"
            type="email"
            name="email"
            placeholder={`Email`}
            className="mt-6 sm:pr-5"
            value={email}
            onChange={(e) => setEmail(e)}
          />
          <Text
            size="s"
            as="p"
            className="mt-[21px] !text-black-900 !font-poly"
          >
            Enter Your Username
          </Text>
          <Input
            shape="round"
            type="text"
            name="userName"
            placeholder={`Username`}
            className="mt-[25px] sm:pr-5"
            value={username}
            onChange={(e) => setUsername(e)}
          />
          <Text
            size="s"
            as="p"
            className="mt-[33px] !text-black-900 !font-poly"
          >
            Enter Your Contact No{" "}
          </Text>
          <Input
            shape="round"
            name="contact_no"
            placeholder={`Contact No`}
            className="mt-6 sm:pr-5"
            value={contact}
            onChange={(e) => setContact(e)}
          />
          <Text
            size="s"
            as="p"
            className="mt-[33px] !text-black-900 !font-poly"
          >
            Enter Your Password
          </Text>
          <Input
            shape="round"
            type="password"
            name="password"
            placeholder={`Password`}
            className="mt-[26px] sm:pr-5"
            value={password}
            onChange={(e) => setPassword(e)}
          />
          <div className="flex sm:flex-col self-stretch justify-between items-center mt-[47px] ml-[31px] gap-5 md:ml-0">
            <div className="flex self-end justify-center items-center w-[52%] sm:w-full mb-3.5 gap-3.5">
              <div className="self-start h-[13px] w-[14px] bg-blue_gray-100 rounded-[5px]" />
              <Text size="s" as="p" className="!text-black-900 !font-poly">
                Remember me on this computer
              </Text>
            </div>
            <OtherBtn
              size="md"
              className="sm:px-5 text-black-900 font-poly min-w-[153px] rounded-[20px]"
              onClick={handleRegister}
            >
              Sign Up
            </OtherBtn>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
