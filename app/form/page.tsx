"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    
    const templateParams = JSON.stringify({
      from_name: email,
      to_name: "Neeraj",
      message,
    });

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_KEY ?? "",
        process.env.NEXT_PUBLIC_TEMPLATE_KEY ?? "",
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setName("");
          sendEmail();
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col gap-6 md:gap-8 my-8 lg:w-1/2">
        <p className="text-lg">Say Hi to me...</p>
        <p className="text-md text-gray-400">
          If the form doesn't work, Please contact me on{" "}
          <Link
            href="mailto:nikatwork365@gmail.com"
            className="underline text-blue-700"
          >
            nikatwork@gmail.com
          </Link>
        </p>
        <form onSubmit={sendEmail}>
          <div className="flex flex-col w-full gap-4">
            <input
              type="text"
              name="name"
              value={name}
              className="border-gray-200 border-b-2 h-10 bg-transparent outline-none"
              placeholder="John Smith"
              onChange={(e: any) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              className="border-gray-200 border-b-2 h-10 bg-transparent outline-none"
              placeholder="xyz@gmail.com"
            />

            <textarea
              name="message"
              value={message}
              onChange={(e: any) => setMessage(e.target.value)}
              id="textarea"
              rows={5}
              className="border-gray-200 border-b-2 bg-transparent outline-none resize-none"
              placeholder="Write your message..."
            />
            <Button
              className="flex justify-center items-center my-4"
              onClick={sendEmail}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
