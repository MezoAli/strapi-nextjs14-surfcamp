"use client";

import { usePathname } from "next/navigation";
import EventPricing from "./EventPricing";
import { FormEvent, useState } from "react";

const LoginRegisterForm = () => {
  const pathname = usePathname();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(firstName, lastName, email, phone);
  };
  return (
    <>
      <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
        <div className="flex justify-between items-center gap-5">
          <div className="flex flex-col gap-5 w-full">
            <label htmlFor="first-name">First Name</label>
            <input
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              type="text"
              className="rounded-xl p-5 bg-lightBrown"
            />
          </div>
          <div className="flex flex-col gap-5 w-full">
            <label htmlFor="last-name">Last Name</label>
            <input
              id="last-name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="rounded-xl p-5 bg-lightBrown"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-xl p-5 bg-lightBrown"
          />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="rounded-xl p-5 bg-lightBrown"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-4 bg-turquoise capitalize text-white text-xl rounded-full w-fit"
        >
          {pathname === "/login" ? "stay in touch" : "Sign up"}
        </button>
      </form>
      {pathname === "/register" ? <EventPricing /> : undefined}
    </>
  );
};

export default LoginRegisterForm;
