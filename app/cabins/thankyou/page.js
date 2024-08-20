import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-dvh w-dvw flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-semibold">
        Thank you for your reservation!
      </h1>
      <Link
        href="/account/reservations"
        className="inline-block text-xl text-secondary-50 underline underline-offset-2 transition-all duration-300 hover:translate-x-2 hover:text-secondary-100"
      >
        Manage your reservations &rarr;
      </Link>
    </div>
  );
}
