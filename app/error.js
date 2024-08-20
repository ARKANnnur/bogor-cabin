"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex h-dvh w-dvw flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-3xl font-semibold">{error.message}</h1>
      <p className="text-lg">ERROR!</p>

      <button
        className="rounded-full border border-secondary-50 px-5 py-2 text-lg transition-all duration-300 hover:bg-secondary-50 hover:text-dark-300"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
