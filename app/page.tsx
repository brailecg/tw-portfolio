import Link from "next/link";
import { Container } from "./Components/Container";
import Image from "next/image";
import clsx from "clsx";
import {
  InstagramIcon,
  XIcon,
  GitHubIcon,
  LinkedInIcon,
} from "./Components/SocialIcons";

import nextReactJs from "../public/next-react.png";
import reactJs from "../public/reactjs.png";
import twImage from "../public/tw.png";
import supabaseImage from "../public/supabase.png";

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

const RightChevron = () => {
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
      "I was part of the Salesforce team. I was assigned to two projects. First was as a javascript developer. Second was as a team lead for team focused in Integration using Apex (Salesforce's proprietary programming language)",
    tech_stack: ["React", "NextJs"],
  },
];

const Experience = () => {
  return (
    <div className="grid gap-16 ">
      {experienceSummaryData.map((exp) => (
        <div key={exp.id} className="relative z-10 flex flex-col gap-4  group">
          <div className="absolute -inset-x-4 -inset-y-6 -z-10 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
          <p className="flex text-[#71717A] border-l-2 border-l-[#71717A] pl-4 text-sm">
            <span>
              {exp.date_range}
              {" : "} {exp.position}
            </span>
          </p>
          <p className="dark:text-white font-semibold">{exp.company_name}</p>
          <p className=" text-[#A1A1AA] text-sm">{exp.summary}</p>
          <Link
            href={"#"}
            className=" text-xs text-[#14B8A6] flex items-center gap-4">
            <span> Read Full Job Details</span>
            <RightChevron />
          </Link>
        </div>
      ))}
    </div>
  );
};

const TechImages = () => {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[nextReactJs, reactJs, twImage, supabaseImage, nextReactJs].map(
          (image, imageIndex) => (
            <div
              key={image.src}
              className={clsx(
                "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800",
                rotations[imageIndex % rotations.length]
              )}>
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className=" max-w-2xl">
          <h1 className=" text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Frontend Developer, webdev content creator
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
      <div className=" text-white">
        <TechImages />
      </div>
      <Container className="mt-16">
        <div className=" flex">
          <div className=" w-1/2">
            <Experience />
          </div>
          <div className=" w-1/2">personal projects</div>
        </div>
      </Container>
    </>
  );
}
