"use client";
import React, { useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { MailIcon } from "./AppIcons";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ArrowDownIcon } from "@heroicons/react/16/solid";
import Loader from "./Loader";

const ContactComponent = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [responseCode, setResponseCode] = useState(200);

  const sentDialog = (statusCode: number) => {
    setResponseCode(statusCode);
    setIsOpen(true);
    setIsLoading(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  const sendResume = async (formData: FormData) => {
    if (!executeRecaptcha) {
      console.log("not able to execute recaptcha");
      return;
    }

    const gRecaptchaToken = await executeRecaptcha("inquirySubmit");
    const sendResume = await fetch(`${window.location.origin}/api/send`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requestorEmail: formData.get("requestorEmail"),
        gRecaptchaToken,
      }),
    });

    sentDialog(sendResume?.status ? sendResume?.status : 500);
  };

  const handleSubmit = (formData: FormData) => {
    setIsLoading(true);
    sendResume(formData);
  };

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <form action={handleSubmit}>
        <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <MailIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Email Resume</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          You can download the resume or have it sent to you. Just enter your
          email and tap that send button
        </p>
        <div className="mt-6 flex">
          <input
            name="requestorEmail"
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 "
          />
          <div className="ml-4 relative flex justify-center items-center">
            <button
              type="submit"
              className="flex-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none ">
              Send
            </button>
            {isLoading && <Loader />}
            {isOpen && (
              <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-start justify-center p-4 animate-in">
                  <DialogPanel
                    className={`max-w-lg space-y-4 bg-white py-2 px-4 border ${
                      responseCode === 200
                        ? "border-teal-400"
                        : "border-red-500"
                    }  rounded-md bg-zinc-50 dark:bg-zinc-800`}>
                    <DialogTitle className="font-semibold text-zinc-600 dark:text-zinc-400 ">
                      {responseCode === 200
                        ? "Email Sent! Thank you!"
                        : "An error has occured! Please try again. You can download a copy if error persists."}
                    </DialogTitle>
                  </DialogPanel>
                </div>
              </Dialog>
            )}
          </div>
        </div>
      </form>

      <a
        href="/brailegawigawen.pdf"
        download
        className="group mt-6 w-full inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </a>
    </div>
  );
};

export default ContactComponent;
