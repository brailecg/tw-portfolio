"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import clsx from "clsx";
import Link from "next/link";
import { ProjectEntry } from "@/types/contentful";

const ProjectSlider = ({ projects }: { projects: ProjectEntry[] }) => {
  const projectImages = projects?.map((project) => {
    return {
      src: project.fields.image?.fields.file?.url as string | undefined,
      alt: project.fields.image?.fields.file?.fileName as string | undefined,
      name: project.fields.name as string | undefined,
    };
  });

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };
  const rotations = ["rotate-2", "-rotate-2", "rotate-2"];
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows
        customTransition="all 500ms"
        transitionDuration={500}
        className=" max-w-[1280px] m-auto"
        containerClass="container mt-2 sm:mt-6 py-2 overflow-hidden"
        dotListClass=""
        infinite
        itemClass=" !w-52 sm:!w-96 !z-20"
        minimumTouchDrag={80}
        pauseOnHover
        responsive={responsive}
        shouldResetAutoplay
        slidesToSlide={1}>
        {projectImages.map((image, index) => (
          <Link key={index} href={"/projects"} className=" group">
            <div
              data-project-name={image.name}
              draggable={false}
              className={clsx(
                "relative z-0 before:absolute before:content-[attr(data-project-name)] before:text-[white] before:font-black sm:before:text-[32px] before:flex before:justify-center before:items-center before:z-[2] before:bg-[black] before:opacity-[70%] before:transition-transform before:duration-[ease-in] before:delay-150 before:-translate-x-full before:translate-y-0 before:p-2 before:inset-0 hover:before:translate-x-[0%] hover:before:translate-y-0 aspect-[9/10] w-44 overflow-hidden rounded-xl  sm:w-72 sm:rounded-2xl ring-zinc-900/5  ring-2 ring-offset-2",
                rotations[index % rotations.length]
              )}>
              <img
                draggable={false}
                src={image.src}
                alt={image.alt}
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute h-full w-full object-cover  -z-10"
              />
            </div>
          </Link>
        ))}
        {projectImages.map((image, index) => (
          <Link key={index} href={"/projects"} className="group">
            <div
              data-project-name={image.name}
              draggable={false}
              className={clsx(
                "relative z-0 before:absolute before:content-[attr(data-project-name)] before:text-[white] before:font-black sm:before:text-[32px] before:flex before:justify-center before:items-center before:z-[2] before:bg-[black] before:opacity-[70%] before:transition-transform before:duration-[ease-in] before:delay-150 before:-translate-x-full before:translate-y-0 before:p-2 before:inset-0 hover:before:translate-x-[0%] hover:before:translate-y-0 aspect-[9/10] w-44 overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl  ring-zinc-900/5  ring-2 ring-offset-2",
                rotations[index % rotations.length]
              )}>
              <img
                draggable={false}
                src={image.src}
                alt={image.alt}
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute h-full w-full object-cover  -z-10"
              />
            </div>
          </Link>
        ))}
      </Carousel>
    </>
  );
};

export default ProjectSlider;
