import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="relative flex h-96 sm:h-72">
      <div className="relative h-full w-1/2 overflow-hidden rounded-3xl rounded-r-none">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-1/2 space-y-3 rounded-3xl rounded-l-none border border-l-0 border-secondary-50 p-5 lg:space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-base text-secondary-50 sm:text-xl">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="absolute -top-3 right-0 flex h-7 items-center rounded-full bg-dark-50 px-3 text-xs uppercase text-green-200 sm:text-base">
              past
            </span>
          ) : (
            <span className="absolute -top-3 right-0 flex h-7 items-center rounded-full bg-base-500 px-3 text-xs uppercase text-green-200 sm:text-base">
              upcoming
            </span>
          )}
        </div>

        <p className="text-justify text-base text-secondary-200 sm:text-lg">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-start gap-2">
          <p className="text-xl font-semibold text-secondary-100">
            ${totalPrice}
          </p>
          <p className="text-secondary-200">&bull;</p>
          <p className="text-lg text-secondary-200">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="text-sm text-secondary-300 lg:ml-5">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      {!isPast(startDate) ? (
        <div className="absolute bottom-0 flex h-1/6 w-full items-center justify-center text-base sm:h-1/5">
          <div className="flex h-full w-1/3 items-center justify-center rounded-3xl rounded-b-none border border-b-0 border-secondary-50 bg-dark-300">
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex h-full w-1/2 items-center justify-center gap-2 uppercase text-secondary-50 transition-all duration-300 hover:scale-125 focus-within:scale-125"
            >
              <PencilSquareIcon className="h-5 w-5 group-hover:text-secondary-100" />
              <span className="hidden group-hover:text-secondary-100 sm:block">
                Edit
              </span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ReservationCard;
