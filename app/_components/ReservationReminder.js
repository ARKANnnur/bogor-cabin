"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "./ReservationContext";

function ReservationReminder() {
  const { range, resetRange: resetReservation } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div className="fixed top-6 flex w-dvw items-center justify-center">
      <div className="flex items-center gap-2 rounded-full border border-secondary-50 bg-dark-50 px-4 py-2">
        <span>👋</span>
        <p className="text-center">
          Don'f forget to reserve your dates <br /> from{" "}
          {format(new Date(range.from), "MMM dd yyyy")} to{" "}
          {format(new Date(range.to), "MMM dd yyyy")}
        </p>
        <button
          className="rounded-full p-1 transition-all hover:bg-accent-600 bg-accent-500"
          onClick={resetReservation}
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default ReservationReminder;
