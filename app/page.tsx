import Link from "next/link";
import { Container } from "./Components/Container";
import Image, { type ImageProps } from "next/image";
import clsx from "clsx";

import nextIcon from "../public/next-icon.svg";
import reactIcon from "../public/react-icon.svg";
import jsIcon from "../public/js-icon.svg";
import phpIcon from "../public/php-icon.svg";
import supabaseIcon from "../public/supabase-icon.svg";
import tailwindIcon from "../public/tailwind-icon.svg";
import {
  InstagramIcon,
  XIcon,
  GitHubIcon,
  LinkedInIcon,
} from "./Components/SocialIcons";

import dictionaryImage from "../public/dictionary-image.png";
import kanbanImage from "../public/kanban-image.png";
import devlinkImage from "../public/devlink-image.png";

import { ArrowDownIcon } from "@heroicons/react/16/solid";
import ProjectSlider from "./Components/Slider";
import {
  DocumentIcon,
  TechIcon,
  MailIcon,
  BriefcaseIcon,
} from "./Components/AppIcons";

type Stack = {
  name: string;
  logo: ImageProps["src"];
  yearsOfExperience: string;
};

const SocialLink = ({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) => {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
};

export const RightChevron = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-4">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

const experienceSummaryData = [
  {
    id: 1,
    date_range: "January 2018 - August 2021",
    company_name: "Resource Box Int'l",
    position: "Web Developer",
    summary:
      "My first job as a developer. I was hired as part of a team maintaining legacy systems and creating internal web apps for other departments",
    tech_stack: ["PHP", "Javascript", "JQuery", "MySql"],
  },
  {
    id: 2,
    date_range: "September 2021 - May 2022",
    company_name: "Morivy Data and Techonologies",
    position: "Junior Developer",
    summary:
      "This is a startup. I was hired as a developer focused in frontend development.",
    tech_stack: ["React", "NextJs"],
  },
  {
    id: 3,
    date_range: "June 2022 - Apr 2024",
    company_name: "Accenture PH",
    position: "Appliciation Development Team Lead",
    summary:
      "I was part of the Salesforce team. I was assigned to two projects. First was as a javascript developer. Second was as a lead for a team focused in integration using Apex (Salesforce's proprietary programming language)",
    tech_stack: ["React", "NextJs"],
  },
];

const Experience = () => {
  return (
    <div className="grid gap-16 ">
      {experienceSummaryData.map((exp, idx) => (
        <div key={idx} className="relative flex flex-col gap-4 group z-10">
          <div className="absolute -inset-x-4 -inset-y-6 -z-10 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
          <Link href={"/experience"} className="flex flex-col gap-4 ">
            <p className="flex text-[#71717A] border-l-2 border-l-[#71717A] pl-4 text-sm">
              <span>
                {exp.date_range}
                {" : "} {exp.position}
              </span>
            </p>
            <p className="dark:text-white font-semibold">{exp.company_name}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {exp.summary}
            </p>
          </Link>
          <Link
            href={"/experience"}
            className=" text-xs text-[#14B8A6] flex items-center gap-4">
            <span> Read Full Job Details</span>
            <RightChevron />
          </Link>
        </div>
      ))}
    </div>
  );
};

const TechItem = ({ stack }: { stack: Stack }) => {
  return (
    <li className="flex items-center gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={stack.logo}
          alt=""
          className="h-7 w-7 rounded-full"
          unoptimized
        />
      </div>
      <dl className="flex items-center justify-between flex-auto gap-x-2">
        <div>
          <dt className="sr-only">Company</dt>
          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {stack.name}
          </dd>
        </div>
        <div>
          <dt className="sr-only">Years of Experience</dt>
          <dd className="ml-auto text-sm text-zinc-400 dark:text-zinc-500">
            {stack.yearsOfExperience}
          </dd>
        </div>
      </dl>
    </li>
  );
};

const TechStack = () => {
  const techStackList: Array<Stack> = [
    {
      name: "NextJs",
      logo: nextIcon,
      yearsOfExperience: "1 year",
    },
    {
      name: "ReactJs",
      logo: reactIcon,
      yearsOfExperience: "1 year",
    },
    {
      name: "Javascript",
      logo: jsIcon,
      yearsOfExperience: "4 years",
    },
    {
      name: "PHP",
      logo: phpIcon,
      yearsOfExperience: "3 years",
    },
    {
      name: "Supabase",
      logo: supabaseIcon,
      yearsOfExperience: "3 months",
    },
    {
      name: "Tailwind",
      logo: tailwindIcon,
      yearsOfExperience: "1 year",
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <div className="flex justify-between mb-4">
        <h2 className="flex items-center md:gap-2 mb-4">
          <TechIcon className="h-6 w-6 flex-none" />
          <span className="dark:text-white text-sm xs:text-base font-semibold">
            {" "}
            Tech Stack
          </span>
        </h2>
        <div className="flex flex-col text-end text-xs max-w-44 sm:max-w-48 dark:text-white ">
          <span className="font-semibold">Years of Experience</span>
          <span className=" text-[11px] italic">
            (professional and non-professional)
          </span>
        </div>
      </div>
      <ul className="flex flex-col gap-2 px-2">
        {techStackList.map((tech, index) => {
          return <TechItem key={index} stack={tech} />;
        })}
      </ul>
    </div>
  );
};

const ContactComponent = () => {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <form action="/thank-you">
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
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 "
          />
          <button
            type="submit"
            className="ml-4 flex-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none ">
            Send
          </button>
        </div>
      </form>

      <button className="group mt-6 w-full inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Container className="">
        <div className=" max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl sm:leading-[3.5rem] dark:text-zinc-100">
            Frontend Developer, aperiodic runner, couch potato.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I'm Braile, a frontend developer from Benguet. I recently made the
            decision to put my dev learnings into the written, non-code form
            through this blog site: <Link href="#"> localhost:3000 </Link>. Go
            through them if you get the chance.
          </p>
          <div className="mt-6 flex space-x-6">
            <SocialLink href={"#"} icon={XIcon} />
            <SocialLink href={"#"} icon={InstagramIcon} />
            <SocialLink href={"#"} icon={GitHubIcon} />
            <SocialLink href={"#"} icon={LinkedInIcon} />
          </div>
        </div>
      </Container>
      <Container className="">
        <h2 className="mt-6 sm:mt-10 flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <DocumentIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Learning Initiatives</span>
        </h2>
      </Container>
      <ProjectSlider />
      <Container className="mt-16">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col">
            <h2 className="mb-8 flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <BriefcaseIcon className="h-6 w-6 flex-none" />
              <span className="ml-3">Employment Record</span>
            </h2>
            <Experience />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <ContactComponent />
            <TechStack />
          </div>
        </div>
      </Container>
    </>
  );
}
