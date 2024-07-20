import React from "react";
import { Container } from "../../Components/Container";
import { getExperiences } from "@/contentful/client";
import { renderRichText } from "@/app/Components/renderer";

const Experience = async () => {
  const experienceList = await getExperiences();

  return (
    <Container>
      <div className=" max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl sm:leading-[3.5rem] dark:text-zinc-100">
          Switching Gears! From customer service to web development.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I started out as a part of the customer service industry not knowing
          when I did my career shift as a web developer, i'll still be doing the
          same... and more?? <span className=" text-2xl"> &#128529;</span>
        </p>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          Instead of customers over the phone, I speak with Project Managers,
          Operations Managers, and sometimes the clients directly. With the
          added complexity of coding. No complaints here though since I enjoy
          every minute of it. <span className="text-2xl">&#128526;</span>
        </p>
      </div>
      <div className="mt-10 grid gap-16 max-w-4xl">
        {experienceList.map((exp, idx) => (
          <div key={idx} className="relative flex flex-col group z-10 gap-2">
            <div className="absolute -inset-x-4 -inset-y-6 -z-10 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
            <div className="flex flex-col gap-4 ">
              <p className="flex text-[#71717A] border-l-2 border-l-[#71717A] pl-4 text-sm">
                <span>
                  {exp.fields.employmentDateRange}
                  {" : "} {exp.fields.positionTitle}
                </span>
              </p>
              <p className="dark:text-white font-semibold">
                {exp.fields.company}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {exp.fields.summary}
              </p>
            </div>

            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              {renderRichText(exp.fields.details)}
            </div>
            <code className="dark:text-white font-semibold text-xs mt-2">
              [
              {exp.fields?.techStack?.map((item) => {
                return (
                  <span className="[&:nth-child(n+2)]:before:content-[',']">
                    {item}
                  </span>
                );
              })}
              ]
            </code>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Experience;
