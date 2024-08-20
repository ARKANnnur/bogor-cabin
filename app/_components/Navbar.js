"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Animation } from "./Animation";

function Navbar() {
  const router = usePathname();

  return (
    <Animation>
      <nav className="nav fixed bottom-8 z-50 flex w-full justify-center text-secondary-50">
        <ul
          className={`${router === "/" && "border-none bg-opacity-50"} ${
            router === "/about"
              ? "border-none border-base-200 bg-opacity-50 sm:bg-base-100 lg:border-8 lg:border-dark-300"
              : "border-base-200"
          } flex items-center gap-10 rounded-full border bg-base-100 px-20 py-2 text-base`}
        >
          <li
            className={`${router === "/about" && "text-secondary-200"} duration-200 focus-within:text-secondary-200 hover:text-secondary-200`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`${router === "/cabins" && "text-secondary-200"} duration-200 focus-within:text-secondary-200 hover:text-secondary-200`}
          >
            <Link href="/cabins">Cabins</Link>
          </li>
          <li
            className={`${router === "/account" && "text-secondary-200"} duration-200 focus-within:text-secondary-200 hover:text-secondary-200`}
          >
            <Link href="/account">You</Link>
          </li>
        </ul>
      </nav>
    </Animation>
  );
}

export default Navbar;
