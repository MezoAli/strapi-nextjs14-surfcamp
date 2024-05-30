import EventsGrid from "@/components/EventsGrid";
import LoginRegisterForm from "@/components/LoginRegisterForm";
import SignupIntro from "@/components/SignupIntro";
import React from "react";

const RegisterPage = () => {
  return (
    <>
      <div className="mt-[12rem] px-10 flex justify-center items-center gap-10">
        <div className="w-[50%]">
          <SignupIntro />
        </div>
        <div className="w-[50%]">
          <LoginRegisterForm />
        </div>
      </div>
      <EventsGrid />
    </>
  );
};

export default RegisterPage;
