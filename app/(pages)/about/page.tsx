import React from "react";
import { Container } from "../../Components/Container";
import Image from "next/image";
import aboutImage from "../../../public/about-image.jpeg";
import { HeartIcon } from "@heroicons/react/16/solid";

const page = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={aboutImage}
              alt="about-image"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I'm Braile. I live in New York City, where I design the future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Written form of any new things i've discovered and topics or
              concepts I don't want to forget about.
            </p>
          </div>
        </div>
        <div className=" lg:pl-20">socials</div>
      </div>
    </Container>
  );
};

export default page;
