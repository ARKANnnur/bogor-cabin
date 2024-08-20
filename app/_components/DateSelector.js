"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to }),
    )
  );
}

function DateSelector({ settings, bookedDates, cabin }) {
  const { range, selectRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange?.to, displayRange?.from);
  const cabinPrice = numNights * (regularPrice - discount);

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex h-[100] w-full flex-col items-stretch justify-center gap-5 sm:w-1/2">
      <DayPicker
        className="hidden h-4/5 flex-wrap place-self-center py-10 lg:block"
        mode="range"
        onSelect={(day) => selectRange(day)}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />
      <DayPicker
        className="h-4/5 flex-wrap place-self-center py-10 lg:hidden"
        mode="range"
        onSelect={(day) => selectRange(day)}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex h-1/5 w-full items-center justify-between bg-accent-500 px-8 text-base text-primary-800">
        {discount > 0 ? (
          <>
            <span className="sm:text-gl lg:text-2xl">
              ${regularPrice - discount}
            </span>
            <span className="font-semibold text-primary-700 line-through">
              ${regularPrice}
            </span>
          </>
        ) : (
          <span className="sm:text-gl lg:text-2xl">${regularPrice}</span>
        )}

        {numNights ? (
          <>
            <p className="sm:text-gl bg-accent-600 px-3 py-2 lg:text-2xl">
              <span>&times;</span> <span>{numNights}</span>
            </p>
            <p>
              <span className="text-lg font-bold uppercase">Total</span>{" "}
              <span className="sm:text-gl font-semibold lg:text-2xl">
                ${cabinPrice}
              </span>
            </p>
          </>
        ) : null}

        {range?.from || range?.to ? (
          <button
            className="border border-primary-800 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-primary-800 hover:text-primary-50"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
