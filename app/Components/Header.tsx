"use client";
import Link from "next/link";
import { Container } from "./Container";
import Image, { type ImageProps } from "next/image";
import { usePathname } from "next/navigation";
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import navImage from "../../public/nav-image.jpeg";

const MoonIcon = (props: React.ComponentPropsWithoutRef<"svg">) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.245 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.745 7c4.25 0 4.25-4.25 4.25-4.25s0 4.25 4.25 4.25c-4.25 0-4.25 4.25-4.25 4.25s0-4.25-4.25-4.25Z"
    />
  </svg>
);

const SunIcon = (props: React.ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}>
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  );
};

const handleToggleTheme = () => {
  document.querySelector("html")?.classList.toggle("dark");
};

const ThemeToggle = () => {
  return (
    <button
      onClick={handleToggleTheme}
      type="button"
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
    </button>
  );
};

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  let isActive = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block px-3 py-2 transition",
          isActive
            ? "text-teal-500 dark:text-teal-400"
            : "hover:text-teal-500 dark:hover:text-teal-400"
        )}>
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  );
};

const DesktopNav = () => {
  return (
    <nav className="hidden sm:flex flex-1 justify-center items-center ">
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/about">About</NavItem>
        <NavItem href="/experience">Experience</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/speaking">Speaking</NavItem>
        <NavItem href="/blogs">Blogs</NavItem>
      </ul>
    </nav>
  );
};

function MobileNavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  let isActive = usePathname() === href;
  return (
    <li>
      <PopoverButton
        as={Link}
        href={href}
        className={clsx(
          "relative block py-2 transition",
          isActive
            ? "text-teal-500 dark:text-teal-400"
            : " dark:hover:text-teal-400"
        )}>
        {children}
      </PopoverButton>
    </li>
  );
}

const MobileNav = () => {
  return (
    <Popover className="sm:hidden">
      <PopoverButton className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-4 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-black/80"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-zinc-900 dark:ring-zinc-800">
        <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
          <MobileNavItem href="/about">About</MobileNavItem>
          <MobileNavItem href="/experience">Experience</MobileNavItem>
          <MobileNavItem href="/projects">Projects</MobileNavItem>
          <MobileNavItem href="/speaking">Speaking</MobileNavItem>
          <MobileNavItem href="/blogs">Blogs</MobileNavItem>
        </ul>
      </PopoverPanel>
    </Popover>
  );
};

const Header = () => {
  return (
    <>
      <header className=" min-h-44 z-50">
        <div className="top-0 h-16 pt-6 sticky">
          <Container className="">
            <div className="flex gap-4">
              <div className="flex justify-start items-center flex-1">
                <Link
                  href={"/"}
                  className=" h-10 w-10 ring-1 ring-gray-300  rounded-full flex justify-center items-center">
                  <div className=" h-9 w-9 dark:bg-gray-50 rounded-full ring-2 ring-white dark:ring-zinc-300/20">
                    <Image
                      src={navImage}
                      alt=""
                      sizes={"2.25rem"}
                      className={
                        "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                      }
                      priority
                    />
                  </div>
                </Link>
              </div>
              <div className="flex-1 flex justify-end sm:justify-center">
                <MobileNav />
                <DesktopNav />
              </div>
              <div className="sm:flex-1 flex justify-end items-center">
                <ThemeToggle />
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};

export default Header;
