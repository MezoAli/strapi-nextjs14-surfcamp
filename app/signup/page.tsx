import EventsGrid from "@/components/EventsGrid";
import LoginRegisterForm from "@/components/LoginRegisterForm";
import SignupIntro from "@/components/SignupIntro";
import axios from "axios";
import React from "react";

const RegisterPage = async () => {
  const response = await axios.get(
    "http://localhost:1337/api/events?populate=deep"
  );
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
      <EventsGrid events={response.data.data} />
    </>
  );
};

export default RegisterPage;
