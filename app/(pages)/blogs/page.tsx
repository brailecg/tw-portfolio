import { Container } from "@/app/Components/Container";
import { RightChevron } from "@/app/page";
import Link from "next/link";
import React from "react";
import { Document } from "@contentful/rich-text-types";
import { renderRichText } from "@/app/Components/renderer";
import dateFormatter from "../../../util/dateFormatter";
import { getBlogEntries } from "@/contentful/client";

const Blogs = async () => {
  const blogEntries = await getBlogEntries();

  return (
    blogEntries &&
    blogEntries.length > 0 && (
      <Container>
        <div className=" max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl sm:leading-[3.5rem] dark:text-zinc-100">
            Writing about anything Web Development and then some.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            These are mostly topics/concepts that are new to me that I don't
            want to forget about. These are more guidelines than articles.
            There's no writing structure, just writing how I came to do things.
          </p>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            Also, each blog content came from{" "}
            <a href="https://www.contentful.com/" className=" text-teal-500">
              Contentful CMS
            </a>
            , so the look of each entry might change as I go along.
          </p>
        </div>

        <div className="mt-16 sm:mt-20 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40 max-w-3xl space-y-16">
          {blogEntries.map((blog) => {
            const { slug, title, date, summary } = blog.fields;
            const { id } = blog.sys;
            const parsedDate = date ? new Date(date) : undefined;
            const formattedDate = parsedDate
              ? dateFormatter({ date: parsedDate })
              : "Date not available";

            return (
              <div
                key={slug}
                className="md:grid md:grid-cols-4 md:items-baseline">
                <time
                  dateTime={date}
                  className="hidden md:flex text-[#71717A] pl-4 text-sm">
                  {formattedDate}
                </time>
                <div className="md:col-span-3 relative flex flex-col gap-4 group z-10">
                  <div className="absolute  -inset-x-4 -inset-y-6 -z-10 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                  <div className="flex flex-col gap-4">
                    <time
                      dateTime={date}
                      className="flex md:hidden text-[#71717A] border-l-2 border-l-[#71717A] pl-4 text-sm">
                      <span>{formattedDate}</span>
                    </time>
                    <p className="dark:text-white font-semibold">{title}</p>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      {renderRichText(summary as Document)}
                    </div>
                  </div>
                  <Link
                    href={`/blogs/${id}`}
                    className=" text-xs text-[#14B8A6] flex items-center gap-4">
                    <span> Read Full Article</span>
                    <RightChevron />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    )
  );
};

export default Blogs;
