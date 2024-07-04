"use client";
import Link from "next/link";
import { Container } from "./Container";
import Coffeeing from "./Coffeeing";

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

const Header = () => {
  return (
    <>
      <header className="relative h-44">
        <div className="top-0 h-16 pt-6 sticky">
          <Container className="">
            <div className="relative flex gap-4">
              <div className="flex justify-start items-center flex-1">
                <Link
                  href={"/"}
                  className=" h-10 w-10 ring-1 ring-gray-300  rounded-full flex justify-center items-center">
                  <div className=" h-9 w-9 dark:bg-gray-50 rounded-full ring-2 ring-white dark:ring-zinc-300/20">
                    <Coffeeing />
                  </div>
                </Link>
              </div>
              <nav className="flex flex-1 justify-center items-center ">
                <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 py-2">
                  <li>
                    <Link
                      className="hover:text-teal-400 px-3 py-2 transition"
                      href={"/about"}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-teal-400 px-3 py-2 transition"
                      href={"/articles"}>
                      Articles
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-teal-400 px-3 py-2 transition"
                      href={"/projects"}>
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-teal-400 px-3 py-2 transition"
                      href={"/speaking"}>
                      Speaking
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-teal-400 px-3 py-2 transition"
                      href={"/uses"}>
                      Uses
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex-1 flex justify-end items-center">
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
