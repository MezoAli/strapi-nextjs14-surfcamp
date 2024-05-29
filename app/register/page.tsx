import LoginRegisterForm from "@/components/LoginRegisterForm";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="mt-[12rem] px-10 flex justify-center items-center gap-10">
      <div className="w-[50%]"></div>
      <div className="w-[50%]">
        <LoginRegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
