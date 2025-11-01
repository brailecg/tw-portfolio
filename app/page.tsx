import Link from "next/link";
import { Container } from "./Components/Container";
import Image, { type ImageProps } from "next/image";

import {
  GitHubIcon,
  LinkedInIcon,
  FrontendMentorIcon,
  FacebookIcon,
} from "./Components/SocialIcons";

import ProjectSlider from "./Components/Slider";
import { DocumentIcon, TechIcon, BriefcaseIcon } from "./Components/AppIcons";
import ContactComponent from "./Components/ContactComponent";
import CaptchaWrapper from "./CaptchaWrapper";

import { getExperiences, getProjects, getTechStack } from "@/contentful/client";
import { sortExperiences } from "@/util/sortExperience";

type Stack = {
  name: string;
  logo: ImageProps["src"];
  stackType: string;
};

const SocialLink = ({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) => {
  return (
    <Link className="group -m-1 p-1" target="_blank" {...props}>
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

const Experience = async () => {
  const experienceSummaryData = await getExperiences();
  sortExperiences(experienceSummaryData);
  return (
    <div className="grid gap-16 ">
      {experienceSummaryData.map((exp, idx) => (
        <div key={idx} className="relative flex flex-col gap-4 group z-10">
          <div className="absolute -inset-x-4 -inset-y-6 -z-10 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
          <Link href={"/experience"} className="flex flex-col gap-4 ">
            <p className="flex text-[#71717A] border-l-2 border-l-[#71717A] pl-4 text-sm">
              <span>
                {exp.fields?.employmentDateRange}
                {" : "} {exp.fields?.positionTitle}
              </span>
            </p>
            <p className="dark:text-white font-semibold">
              {exp.fields?.company}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {exp.fields?.summary}
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
    <li className="flex items-center gap-2 sm:gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={stack.logo}
          alt={stack.name}
          width={7}
          height={7}
          className="h-7 w-7 rounded-full"
          unoptimized
        />
      </div>
      <dl className="flex items-center justify-between flex-auto gap-x-2">
        <div>
          <dt className="sr-only">Name</dt>
          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {stack.name}
          </dd>
        </div>
      </dl>
    </li>
  );
};

const TechStack = async () => {
  const techStackFromCMS = await getTechStack();
  const techStackList: Array<Stack> = techStackFromCMS.map((tech) => ({
    name: tech.fields.techStackName,
    logo: `https:${tech?.fields?.techStackImage?.fields?.file?.url}`,
    stackType: tech.fields.techStackType,
  }));

  const fullstack = techStackList.filter(
    (item) => item.stackType === "fullstack"
  );
  const frontstack = techStackList.filter(
    (item) => item.stackType === "frontend"
  );
  const backstack = techStackList.filter(
    (item) => item.stackType === "backend"
  );
  const otherstack = techStackList.filter((item) => item.stackType === "other");
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
      </div>
      <ul className="grid grid-cols-2 gap-2 px-2">
        {fullstack.map((tech, index) => {
          return <TechItem key={index} stack={tech} />;
        })}
        <li className=" col-span-2 border-t border-zinc-100 dark:border-zinc-700/40"></li>
        {frontstack.map((tech, index) => {
          return <TechItem key={index} stack={tech} />;
        })}
        <li className=" col-span-2 border-t border-zinc-100 dark:border-zinc-700/40"></li>
        {backstack.map((tech, index) => {
          return <TechItem key={index} stack={tech} />;
        })}
        <li className=" col-span-2 border-t border-zinc-100 dark:border-zinc-700/40"></li>
        {otherstack.map((tech, index) => {
          return <TechItem key={index} stack={tech} />;
        })}
      </ul>
    </div>
  );
};

export default async function Home() {
  const projects = await getProjects();
  return (
    <>
      <Container className="">
        <div className=" max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl sm:leading-[3.5rem] dark:text-zinc-100">
            Web Developer, aperiodic runner, couch potato.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hello! I'm Braile, a web developer whose sole{" "}
            <span className="relative">
              purpose{" "}
              <span className="absolute -top-[10px] -right-1 text-xs">
                &#128517;
              </span>
            </span>{" "}
            is creating dynamic, user-friendly websites and web apps. Just
            scroll and click around and you can explore things all me in here.
          </p>
          <div className="mt-6 flex space-x-6">
            <SocialLink
              href={"https://github.com/brailecg"}
              icon={GitHubIcon}
            />
            <SocialLink
              href={"https://www.linkedin.com/in/braile-gawigawen-86084a319/"}
              icon={LinkedInIcon}
            />
            <SocialLink
              href={"https://www.frontendmentor.io/profile/brailecg"}
              icon={FrontendMentorIcon}
            />
            <SocialLink
              href={"https://www.facebook.com/braile.gawigawen.3"}
              icon={FacebookIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="">
        <h2 className="mt-6 sm:mt-10 flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <DocumentIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Learning Initiatives</span>
        </h2>
      </Container>
      <ProjectSlider projects={projects} />

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
            <CaptchaWrapper>
              <ContactComponent />
            </CaptchaWrapper>
            <TechStack />
          </div>
        </div>
      </Container>
    </>
  );
}
