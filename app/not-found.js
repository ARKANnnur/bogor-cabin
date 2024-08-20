import Link from "next/link";

function NotFound() {
  return (
    <main className="h-dvh w-dvw flex justify-center items-center gap-2 flex-col">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="rounded-full border border-secondary-50 px-5 py-2 text-lg transition-all duration-300 hover:bg-secondary-50 hover:text-dark-300"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
