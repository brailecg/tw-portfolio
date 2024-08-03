"use client";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import clsx from "clsx";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ProjectEntry } from "@/types/contentful";
import AppMotionComponent from "./AppMotionComponent";

const ProjectSlider = ({ projects }: { projects: ProjectEntry[] }) => {
  const [isImageLoading, setImageLoading] = useState<boolean>(true);
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
  const blurStyle =
    "blur-[5px] transition-[filter] duration-[0.3s] ease-[ease-in]";
  const unblurStyle =
    "blur-none transition-[filter] duration-[0.3s] ease-[ease-in]";
  return (
    <AppMotionComponent>
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
              <Image
                fill
                draggable={false}
                src={`https:${image?.src as string | StaticImageData}`}
                alt={image?.alt as string}
                sizes="(min-width: 640px) 18rem, 11rem"
                className={`absolute h-full w-full object-cover opacity-80 ${
                  isImageLoading ? blurStyle : unblurStyle
                }`}
                onLoad={() => setImageLoading(false)}
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
              <Image
                fill
                draggable={false}
                src={`https:${image?.src as string | StaticImageData}`}
                alt={image?.alt as string}
                sizes="(min-width: 640px) 18rem, 11rem"
                className={`absolute h-full w-full object-cover opacity-80 ${
                  isImageLoading ? blurStyle : unblurStyle
                }`}
                onLoad={() => setImageLoading(false)}
              />
            </div>
          </Link>
        ))}
      </Carousel>
    </AppMotionComponent>
  );
};

export default ProjectSlider;
