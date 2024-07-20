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
          <Link key={index} href={"/projects"}>
            <div
              draggable={false}
              className={clsx(
                "relative aspect-[9/10] w-44 overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800  ring-zinc-900/5  ring-2 ring-offset-2",
                rotations[index % rotations.length]
              )}>
              <img
                draggable={false}
                src={image.src}
                alt={image.alt}
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute h-full w-full object-cover"
              />
            </div>
          </Link>
        ))}
        {projectImages.map((image, index) => (
          <Link key={index} href={"/projects"}>
            <div
              draggable={false}
              className={clsx(
                "relative aspect-[9/10] w-44 overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800  ring-zinc-900/5  ring-2 ring-offset-2",
                rotations[index % rotations.length]
              )}>
              <img
                draggable={false}
                src={image.src}
                alt={image.alt}
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute h-full w-full object-cover"
              />
            </div>
          </Link>
        ))}
      </Carousel>
    </>
  );
};

export default ProjectSlider;
