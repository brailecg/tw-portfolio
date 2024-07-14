import React from "react";
import { Container } from "../../Components/Container";
import Link from "next/link";
import { RightChevron } from "@/app/page";

const experienceSummaryData = [
  {
    id: 1,
    date_range: "January 2018 - August 2021",
    company_name: "Resource Box Int'l",
    position: "Web Developer",
    summary:
      "My first job as a developer. I was hired as part of a team maintaining legacy systems and creating internal web apps for other departments",
    tech_stack: ["PHP", "Javascript", "JQuery", "MySql", "REST", "Bootstrap"],
    contributions: [
      {
        id: 1,
        title: "Pricing Portal",
        description:
          "A ticketing web app used by our Pricing Dept and Sales team for negotiating better pricing for customers.",
      },
      {
        id: 2,
        title: "Customer Registration Portal",
        description:
          "a web app for our compliance department to register a customer who has submitted complete requirements for them to access our customer ordering portal and formulary.",
      },
      {
        id: 3,
        title: "Supply Chain Managment Portal",
        description:
          "a ticketing web app for our Supply Chain department and Pricing department for negotiating better supplier pricing",
      },
    ],
  },
  {
    id: 2,
    date_range: "September 2021 - May 2022",
    company_name: "Morivy Data and Techonologies",
    position: "Junior Developer",
    summary:
      "This is a startup. I was hired as a developer focused in frontend development.",
    tech_stack: ["React", "NextJs", "MySql"],
    contributions: [
      {
        id: 1,
        title: "Bookkeeping App",
        description:
          "Assigned as a frontend dev for a web app for customers to upload payments they made for services provided by company",
      },
      {
        id: 2,
        title: "Dashboard Pages",
        description:
          "Assigned as a frontend dev for the dashboard pages for the company services using Ant Design Charts",
      },
    ],
  },
  {
    id: 3,
    date_range: "June 2022 - Apr 2024",
    company_name: "Accenture PH",
    position: "Appliciation Development Team Lead",
    summary:
      "I was part of the Salesforce team where I was involved in two projects. As a javascript developer for a government website and a team lead for the integration team for an insurance company",
    tech_stack: [
      "Javacript",
      "Apex",
      "Salesforce Object Query Language (SOQL)",
    ],
    contributions: [
      {
        id: 1,
        title: "Web Survey",
        description:
          "Using a Salesforce proprietary portal, create a web survey for a certain page using pure javascript",
      },
      {
        id: 2,
        title: "Recommendation Section",
        description:
          "Using Salesforce Einstein recommendation, build using javascript a section on the client's website where user's can see recommended services and/or products based on their history",
      },
      {
        id: 3,
        title: "Data Integration",
        description:
          "Developer and lead of the integration team to build the correct data from salesforce that will be sent to client's insurance web app using Apex",
      },
    ],
  },
];
const Experience = () => {
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
        {experienceSummaryData.map((exp, idx) => (
          <div key={idx} className="relative flex flex-col group z-10 gap-2">
            <div className="absolute -inset-x-4 -inset-y-6 -z-10 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
            <div className="flex flex-col gap-4 ">
              <p className="flex text-[#71717A] border-l-2 border-l-[#71717A] pl-4 text-sm">
                <span>
                  {exp.date_range}
                  {" : "} {exp.position}
                </span>
              </p>
              <p className="dark:text-white font-semibold">
                {exp.company_name}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {exp.summary}
              </p>
            </div>

            <div className="">
              <ul className="list-disc list-inside grid gap-2">
                {exp?.contributions?.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="text-sm text-zinc-600 dark:text-zinc-400">
                      <span className=" font-semibold"> {item.title} - </span>{" "}
                      {item.description}
                    </li>
                  );
                })}
              </ul>
            </div>
            <code className="dark:text-white font-semibold text-xs mt-2">
              [
              {exp?.tech_stack.map((item) => {
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
