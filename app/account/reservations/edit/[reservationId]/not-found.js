import Link from "next/link";

function NotFound() {
  return (
    <main className="flex h-full my-20 w-full flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-3xl font-semibold">
        This Reservation could not be found :(
      </h1>
      <Link
        href="/account/reservations"
        className="rounded-full border border-secondary-50 px-5 py-2 text-lg transition-all duration-300 hover:bg-secondary-50 hover:text-dark-300"
      >
        Back to all Reservations
      </Link>
    </main>
  );
}

export default NotFound;
