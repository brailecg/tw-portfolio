import { Container } from "@/app/Components/Container";
import { RightChevron } from "@/app/page";
import Link from "next/link";
import React from "react";
import { createClient, EntryCollection } from "contentful";
import { Document } from "@contentful/rich-text-types";
import { renderRichText } from "./renderer";
import dateFormatter from "../../../util/dateFormatter";
import { BlogEntry } from "@/types/contentful/TypeBlog";

const client = createClient({
  space: process.env.SPACE_ID as string,
  accessToken: process.env.ACCESS_TOKEN as string,
});

const getBlogEntries = async (): Promise<BlogEntry[]> => {
  try {
    const entries: EntryCollection<BlogEntry> =
      await client.getEntries<BlogEntry>({
        content_type: "blog",
      });

    return entries.items as unknown as BlogEntry[];
  } catch (error) {
    console.error("Error retrieving blog entries:", error);
    return [];
  }
};

const Blogs = async () => {
  const blogEntries = await getBlogEntries();

  return (
    <Container>
      <div className=" max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl sm:leading-[3.5rem] dark:text-zinc-100">
          Writing about anything Web Development and then some.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Written form of any new things i've discovered and topics or concepts
          I don't want to forget about.
        </p>
      </div>

      <div className="mt-16 sm:mt-20 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40 max-w-3xl space-y-16">
        {blogEntries.map((blog) => {
          const { slug, title, date, summary } = blog.fields;
          const parsedDate = date ? new Date(date) : undefined;
          const formattedDate = parsedDate
            ? dateFormatter({ date: parsedDate })
            : "Date not available";

          return (
            <div
              key={slug}
              className="md:grid md:grid-cols-4 md:items-baseline">
              <p className="hidden md:flex text-[#71717A] pl-4 text-sm">
                {formattedDate}
              </p>
              <div className="md:col-span-3 relative flex flex-col gap-4 group z-10">
                <div className="absolute -inset-x-4 -inset-y-6 -z-10 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                <Link href={"#"} className="flex flex-col gap-4 ">
                  <p className="flex md:hidden text-[#71717A] border-l-2 border-l-[#71717A] pl-4 text-sm">
                    {formattedDate}
                  </p>
                  <p className="dark:text-white font-semibold">{title}</p>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    {renderRichText(summary as Document)}
                  </div>
                </Link>
                <Link
                  href={"#"}
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
  );
};

export default Blogs;
