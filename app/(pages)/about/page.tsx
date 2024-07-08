import React from "react";
import { Container } from "../../Components/Container";
import Image from "next/image";
import aboutImage from "../../../public/about-image.jpeg";
import {
  InstagramIcon,
  XIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/app/Components/SocialIcons";
import Link from "next/link";

const SocialLink = ({
  text,
  icon: Icon,
  href,
}: {
  href: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}) => {
  return (
    <Link
      className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      href={href}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-teal-500  " />
      <span className="ml-4">{text}</span>
    </Link>
  );
};

const MailIcon = (props: React.ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
};

const About = () => {
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
          <h1 className=" sm:leading-[3.5rem] text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi, I'm Braile. Pull over if you want to know more beyond my first
            name.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I took engineering when I was in college. I thought pursuing it as
              a career was the best and only option after graduation.
              Unfortunately, there were limited to no opportunities for a
              non-licensed fresh grad.{" "}
            </p>
            <p>
              I eventually applied for a customer service job, stayed there for
              two years, applied for another one which lasted for a year and
              half. I can definitely attribute from these jobs my astronomic
              improvement when dealing with others, from people at work to
              anyone I just randomly meet.
            </p>
            <p>
              While working these jobs is where I met people from different IT
              industries/niches. It tickled my interest in pursuing a career in
              the field, but given my non-existent savings at the time, I can't
              afford to go back to school nor to quit my job and try my luck. I
              can't just apply as someone with no experience. Good thing my
              masters in Google search led me to a bootcamp for web developers.
            </p>
            <p>
              I applied (yes, you have to apply to get in) and was granted
              entry. Also, I was able to get in cause they have a payment plan
              that works for someone like me. I worked while attending bootcamp,
              summing an 18-hour waking period for most of my weekdays for three
              months. I'd say it was worth it.
            </p>
            <p>
              The rest, you can check my work experiences{" "}
              <Link className=" text-purple-500" href={"#"}>
                here
              </Link>
              .
            </p>
          </div>
        </div>
        <div className=" lg:pl-20">
          <div className="mt-6 space-y-4">
            <SocialLink href={"#"} icon={XIcon} text="Follow on X" />

            <SocialLink
              href={"#"}
              icon={InstagramIcon}
              text="Follow on Instagram"
            />
            <SocialLink href={"#"} icon={GitHubIcon} text="Follow on Github" />
            <SocialLink
              href={"#"}
              icon={LinkedInIcon}
              text="Follow on LinkedIn"
            />
          </div>
          <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
            <Link
              className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
              href="mailto:brailegawen@gmail.com">
              <MailIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
              <span className="ml-4"> brailegawen@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
