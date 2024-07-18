import Link from "next/link";

import { ContainerInner, ContainerOuter } from "./Container";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400">
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="mt-32 flex-none relative ">
      <div className="text-xs left-5 bottom-5 origin-bottom-left -rotate-90 absolute text-zinc-800 dark:text-zinc-100 opacity-50">
        design from{" "}
        <a
          href="https://tailwindui.com/"
          className=" text-teal-900 dark:text-teal-100">
          https://tailwindui.com
        </a>
      </div>
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/experience">Experience</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/blogs">Blogs</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Braile Gawigawen. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
