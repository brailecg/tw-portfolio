import { Container } from "@/app/Components/Container";
import React from "react";
import Image from "next/image";

import dictionaryImage from "../../../public/dictionary-image.png";
import kanbanImage from "../../../public/kanban-image.png";
import devlinkImage from "../../../public/devlink-image.png";
import Link from "next/link";

const LinkIcon = (props: React.ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
};

const projectListArray = [
  {
    id: 1,
    name: "Kanban App",
    description: "A web app used for personal project management.",
    links: {
      linkName: "Kanban.app",
      web: "https://fm-kanban-psi.vercel.app/auth",
      gh: "https://github.com/brailecg/fm-kanban",
    },
    image: kanbanImage,
  },
  {
    id: 2,
    name: "Link Sharing App",
    description: "A web app used for building a sharable social links.",
    links: {
      linkName: "linkSharing.app",
      web: "https://fm-link-sharing-app-two.vercel.app/login",
      gh: "https://github.com/brailecg/fm-link-sharing-app",
    },
    image: devlinkImage,
  },
  {
    id: 3,
    name: "Simple Dictionary App",
    description: "A dictionary web app.",
    links: {
      linkName: "dictionary.app",
      web: "https://fm-dictionary.vercel.app/",
      gh: "https://github.com/brailecg/fm-dictionary",
    },
    image: dictionaryImage,
  },
];

const page = () => {
  return (
    <Container>
      <div className=" max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl sm:leading-[3.5rem] dark:text-zinc-100">
          List of personal projects I've been working on.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I've been trying to better myself by building projects but I put here
          things that are full fledge apps and those that I plan to work on more
          fully.
        </p>
      </div>
      <ul className="mt-10 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {projectListArray?.map((item) => {
          return (
            <li
              key={item.id}
              className="group relative flex flex-col justify-center items-start">
              <div className="relative z-10 flex items-center justify-center bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={item?.image}
                  alt="image sample"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                <span className="relative z-10">{item?.name}</span>
              </h2>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 min-h-10">
                {item?.description}
              </p>
              <div className="flex space-x-6 sm:mt-6">
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={item?.links?.web}
                  className="relative z-10 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200 hover:font-bold">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span>{item?.links?.linkName}</span>
                </Link>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={item?.links?.gh}
                  className="relative z-10 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200 hover:font-bold">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span>github.com</span>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default page;
