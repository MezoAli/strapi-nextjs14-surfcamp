import LoginRegisterForm from "@/components/LoginRegisterForm";
import axios from "axios";
import React from "react";

const LoginPage = async () => {
  const response = await axios.get(
    "http://localhost:1337/api/events?populate=deep"
  );
  console.log(response.data.data);

  return (
    <div className="mt-[12rem] px-10 flex justify-center items-center gap-10">
      <div className="w-[50%]"></div>
      <div className="w-[50%]">
        <LoginRegisterForm />
      </div>
    </div>
  );
};

export default LoginPage;
