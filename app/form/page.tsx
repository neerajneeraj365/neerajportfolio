"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";

const Form = () => {
  const [state, handleSubmit] = useForm("meqyzgjj");
  if (state.succeeded) {
    return (
      <div className="flex flex-col justify-center items-center h-full w-full">
        <Image src="/done.png" height="400" width="400" alt="form completion" />
        <p className="m-5 text-lg">Success!!</p>
        <Link href="/" className="underline">
          Back to Homepage
        </Link>
      </div>
    );
  }
  if (state.errors) {
    return (
      <div className="flex flex-col justify-center items-center h-full w-full">
        <Image src="/failed.png" height="400" width="400" alt="form failed" />
        <p className="m-5 text-lg">Failed!!</p>
        <Link href="/" className="underline">
          Try again
        </Link>
      </div>
    );
  }
  return (
    <section className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col gap-6 md:gap-8 my-8 lg:w-1/2">
        <p className="text-lg">Say Hi to me...</p>
        <p className="text-md text-gray-400">
          If the form doesn't work, Please contact me on{" "}
          <Link
            href="mailto:nikatwork365@gmail.com"
            className="underline text-blue-700"
          >
            nikatwork365@gmail.com
          </Link>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-full gap-4">
            <input
              type="text"
              name="name"
              className="border-gray-200 border-b-2 h-10 bg-transparent outline-none"
              placeholder="John Smith"
            />
            <input
              type="email"
              name="email"
              className="border-gray-200 border-b-2 h-10 bg-transparent outline-none"
              placeholder="xyz@gmail.com"
            />
            <textarea
              name="message"
              id="textarea"
              rows={5}
              className="border-gray-200 border-b-2 bg-transparent outline-none resize-none"
              placeholder="Write your message..."
            />
            <Button
              className="flex justify-center items-center my-4"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
