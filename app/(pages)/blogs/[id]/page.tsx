import { Container } from "@/app/Components/Container";
import React from "react";
import { createClient, Entry } from "contentful";
import { BlogEntry } from "@/types/contentful/TypeBlog";
import dateFormatter from "@/util/dateFormatter";
import { renderRichText } from "../renderer";
import { Document } from "@contentful/rich-text-types";

const client = createClient({
  space: process.env.SPACE_ID as string,
  accessToken: process.env.ACCESS_TOKEN as string,
});

const getBlogEntry = async ({ id }: { id: string }): Promise<BlogEntry> => {
  try {
    const entry: Entry<BlogEntry> = await client.getEntry<BlogEntry>(id);

    return entry as unknown as BlogEntry;
  } catch (error) {
    console.error("Error retrieving blog entries:", error);
    return {} as BlogEntry;
  }
};

const BlogArticle = async ({ params }: { params: { id: string } }) => {
  const article = await getBlogEntry({ id: params.id });
  if (article) {
    const { title, date, content } = article?.fields;
    const parsedDate = date ? new Date(date) : undefined;
    const formattedDate = parsedDate
      ? dateFormatter({ date: parsedDate })
      : "Date not available!";
    return (
      <Container className="">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 leading-[3.5rem]">
                  {title}
                </h1>
                <time
                  dateTime={date}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500">
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formattedDate}</span>
                </time>
              </header>
              <div className="mt-8 prose  text-sm text-zinc-600 dark:text-zinc-400">
                {renderRichText(content as unknown as Document)}
              </div>
            </article>
          </div>
        </div>
      </Container>
    );
  }
};

export default BlogArticle;
