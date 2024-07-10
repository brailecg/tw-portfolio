"use client";
import React from "react";
import Image, { type ImageProps } from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import clsx from "clsx";

import dictionaryImage from "../../public/dictionary-image.png";
import kanbanImage from "../../public/kanban-image.png";
import devlinkImage from "../../public/devlink-image.png";

const SliderContainer = () => {
  const rotations = ["rotate-2", "-rotate-2", "rotate-2"];
  return [dictionaryImage, kanbanImage, devlinkImage].map(
    (image, imageIndex) => (
      <div
        key={image.src}
        className={clsx(
          "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 shadow-lg",
          rotations[imageIndex % rotations.length]
        )}>
        <Image
          src={image}
          alt=""
          sizes="(min-width: 640px) 18rem, 11rem"
          className="absolute h-full w-full object-cover opacity-50"
        />
      </div>
    )
  );
};

const ProjectSlider = () => {
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
      items: 1,
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
    <Carousel
      draggable
      className="mt-9  py-4 overflow-hidden"
      slidesToSlide={1}
      centerMode={true}
      responsive={responsive}
      infinite={true}>
      <div
        className={clsx(
          "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 shadow-lg",
          rotations[0 % rotations.length]
        )}>
        <Image
          src={kanbanImage}
          alt=""
          sizes="(min-width: 640px) 18rem, 11rem"
          className="absolute h-full w-full object-cover"
        />
      </div>
      <div
        className={clsx(
          "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 shadow-lg",
          rotations[1 % rotations.length]
        )}>
        <Image
          src={dictionaryImage}
          alt=""
          sizes="(min-width: 640px) 18rem, 11rem"
          className="absolute h-full w-full object-cover"
        />
      </div>
      <div
        className={clsx(
          "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 shadow-lg",
          rotations[2 % rotations.length]
        )}>
        <Image
          src={devlinkImage}
          alt=""
          sizes="(min-width: 640px) 18rem, 11rem"
          className="absolute h-full w-full object-cover"
        />
      </div>
    </Carousel>
  );
};

export default ProjectSlider;
