import { Container } from "@/app/Components/Container";
import { RightChevron } from "@/app/page";
import Link from "next/link";
import React from "react";

type BlogArticleType = {
  id: number;
  date: string;
  title: string;
  summary: string;
};

const Blogs = () => {
  const blogs: BlogArticleType[] = [
    {
      id: 1,
      date: "September 5, 2022",
      title: "Crafting a design system for a multiplanetary future",
      summary:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem alias labore, quos fuga modi animi tenetur fugit suscipit vel odio soluta libero rerum, porro perferendis perspiciatis error quae laboriosam harum.",
    },
    {
      id: 2,
      date: "September 1, 2022",
      title: "Introducing Animaginary: High performance web animations",
      summary:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem alias labore, quos fuga modi animi tenetur fugit suscipit vel odio soluta libero rerum, porro perferendis perspiciatis error quae laboriosam harum.",
    },
    {
      id: 1,
      date: "August 25, 2022",
      title: "Rewriting the cosmOS kernel in Rust",
      summary:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem alias labore, quos fuga modi animi tenetur fugit suscipit vel odio soluta libero rerum, porro perferendis perspiciatis error quae laboriosam harum.",
    },
  ];

  const BlogArticle = ({ blog }: { blog: BlogArticleType }) => {
    return (
      <div className="md:grid md:grid-cols-4 md:items-baseline">
        <p className="hidden md:flex text-[#71717A] pl-4 text-sm">
          {blog.date}
        </p>
        <div className="md:col-span-3 relative flex flex-col gap-4 group z-10">
          <div className="absolute -inset-x-4 -inset-y-6 -z-10 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
          <Link href={"#"} className="flex flex-col gap-4 ">
            <p className="flex md:hidden text-[#71717A] border-l-2 border-l-[#71717A] pl-4 text-sm">
              {blog.date}
            </p>
            <p className="dark:text-white font-semibold">{blog.title}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {blog.summary}
            </p>
          </Link>
          <Link
            href={"#"}
            className=" text-xs text-[#14B8A6] flex items-center gap-4">
            <span> Read Full Job Details</span>
            <RightChevron />
          </Link>
        </div>
      </div>
    );
  };
  return (
    <Container>
      <div className=" max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl sm:leading-[3.5rem] dark:text-zinc-100">
          Writing about anything Web Development
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Written form of any new things i've discovered and topics or concepts
          I don't want to forget about.
        </p>
      </div>

      <div className="mt-16 sm:mt-20 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40 max-w-3xl space-y-16">
        {blogs.map((blog) => {
          return <BlogArticle key={blog.id} blog={blog} />;
        })}
      </div>
    </Container>
  );
};

export default Blogs;
