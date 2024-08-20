import Link from "next/link";

function NotFound() {
  return (
    <main className="flex h-dvh w-dvw items-center justify-center text-center flex-col gap-2">
      <h1 className="text-3xl font-semibold">
        This Cabin could not be found :(
      </h1>
      <Link
        href="/"
        className="text-lg border hover:text-dark-300 border-secondary-50 rounded-full px-5 py-2 hover:bg-secondary-50 transition-all duration-300"
      >
        Back to all Cabin
      </Link>
    </main>
  );
}

export default NotFound;
