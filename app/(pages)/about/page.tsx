import React from "react";
import { Container } from "../../Components/Container";
import Image from "next/image";
import aboutImage from "../../../public/about-image.jpeg";
import {
  InstagramIcon,
  XIcon,
  GitHubIcon,
  LinkedInIcon,
  FrontendMentorIcon,
  FacebookIcon,
} from "@/app/Components/SocialIcons";
import Link from "next/link";
import AppMotionComponent from "@/app/Components/AppMotionComponent";

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
        <AppMotionComponent variant="opacityInX" className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={aboutImage}
              alt="about-image"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </AppMotionComponent>
        <AppMotionComponent
          variant="opacityX"
          className="lg:order-first lg:row-span-2">
          <h1 className=" sm:leading-[3.5rem] text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi, I'm Braile. Read through if you want to know more beyond my
            first name.
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
              half. I can definitely attribute from these experiences my
              improvement when dealing and communicating with others, someone I
              personally know or otherwise.
            </p>
            <p>
              While working these jobs is where I met people from the IT
              industry. Working with them piqued my interest in pursuing a
              career in the field, but given my non-existent savings at the
              time, I can't afford to go back to school nor to quit my job and
              try my luck. I can't just apply as someone with no experience.
              Good thing my masters in Google search led me to a bootcamp for
              web developers.
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
              <Link className=" text-teal-500" href={"/experience"}>
                here
              </Link>
              .
            </p>
          </div>
        </AppMotionComponent>
        <AppMotionComponent variant="opacityInX" className=" lg:pl-20">
          <div className="mt-6 space-y-4">
            <SocialLink
              href={"https://github.com/brailecg"}
              icon={GitHubIcon}
              text="Check my Github"
            />
            <SocialLink
              href={"https://www.linkedin.com/in/braile-gawigawen-86084a319/"}
              icon={LinkedInIcon}
              text="Connect on LinkedIn"
            />
            <SocialLink
              href={"https://www.frontendmentor.io/profile/brailecg"}
              icon={FrontendMentorIcon}
              text="Join Frontend Mentor"
            />

            <SocialLink
              href={"https://www.facebook.com/braile.gawigawen.3"}
              icon={FacebookIcon}
              text="Add on Facebook"
            />
          </div>
          <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
            <Link
              className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
              href="mailto:brailegawen@gmail.com">
              <MailIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
              <span className="ml-4">braile.c.gawigawen@gmail.com</span>
            </Link>
          </div>
        </AppMotionComponent>
      </div>
    </Container>
  );
};

export default About;
