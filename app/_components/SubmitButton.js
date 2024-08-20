"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, pendingLabel }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="rounded-full bg-dark-50 px-8 py-2 text-secondary-100 transition-all duration-300 hover:bg-dark-50 hover:text-secondary-50 focus-within:bg-dark-50 focus-within:text-secondary-50 sm:py-4"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
