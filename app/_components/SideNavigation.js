"use client";

import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-secondary-50" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-secondary-50" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-secondary-50" />,
  },
];

function SideNavigation() {
  const pathName = usePathname();

  return (
    <nav className="relative h-full text-nowrap rounded-3xl border border-secondary-50 p-5">
      <ul className="flex h-full flex-col gap-2 text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`flex items-center gap-4 rounded-full px-5 py-3 font-semibold text-secondary-200 transition-colors focus-within:bg-dark-50 focus-within:bg-opacity-50 focus-within:text-secondary-100 hover:rounded-full hover:bg-dark-50 hover:bg-opacity-50 hover:text-secondary-100 ${
                pathName === link.href
                  ? "rounded-full bg-dark-50 bg-opacity-50 text-secondary-100"
                  : ""
              }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
