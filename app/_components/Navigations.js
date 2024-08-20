'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation({ session }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-xl flex items-center gap-5 h-full">
      <ul
        className={`${
          isOpen
            ? 'flex flex-col w-auto absolute right-14 top-4 p-4 border border-primary-900 rounded-md gap-2 sm:flex sm:gap-16 items-center sm:border-none sm:relative sm:flex-row sm:p-0 sm:top-0 sm:right-0'
            : 'sm:flex gap-16 items-center hidden bg-blue-100'
        } bg-primary-950`}
      >
        <li className="order-2 sm:order-1 z-20">
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li className="order-3 sm:order-2 z-20">
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li className="order-1 sm:order-3 z-20">
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center justify-between gap-5 grow"
            >
              Guest area
              <img
                src={session.user.image}
                alt={session.user.name}
                className="h-8 rounded-full"
              />
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
      <div
        onClick={() => setIsOpen((open) => !open)}
        className="sm:hidden z-20"
      >
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
    </nav>
  );
}
