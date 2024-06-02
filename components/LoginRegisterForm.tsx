"use client";

import { usePathname } from "next/navigation";
import EventPricing from "./EventPricing";
import { FormEvent, useState } from "react";
import axios from "axios";

const LoginRegisterForm = ({
  singlePrice,
  sharedPrice,
  eventId,
}: {
  singlePrice?: number;
  sharedPrice?: number;
  eventId?: number;
}) => {
  const pathname = usePathname();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/participants`,
        {
          data: {
            email,
            firstName,
            lastName,
            phone,
            event: eventId ? eventId : null,
          },
        }
      );
      alert("sign up successful");
    } catch (error: any) {
      alert(error.response.data.error.message);
    } finally {
      setEmail("");
      setFirstName("");
      setLastName("");
      setPhone("");
    }
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
            required
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="rounded-xl p-5 bg-lightBrown"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-4 bg-turquoise capitalize text-white text-xl rounded-full w-fit"
        >
          {pathname === "/signup" ? "stay in touch" : "Sign up"}
        </button>
      </form>
      {pathname === "/signup" ? undefined : (
        <EventPricing sharedPrice={sharedPrice} singlePrice={singlePrice} />
      )}
    </>
  );
};

export default LoginRegisterForm;
