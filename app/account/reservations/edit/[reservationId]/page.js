import { updateReservation } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";
import SubmitButton from "@/app/_components/SubmitButton";

export async function generateMetadata({ params }) {
  const { id } = await getBooking(params.reservationId);
  return { title: `Resrervation ${id}` };
}

export default async function Page({ params }) {
  const { reservationId } = params;
  const { numGuests, observations, cabinId } = await getBooking(reservationId);
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div className="w-full">
      <h2 className="mb-7 text-2xl text-secondary-50">
        Edit Reservation #{reservationId}
      </h2>

      <form
        className="flex flex-col gap-6 py-8 text-lg"
        action={updateReservation}
      >
        <input
          type="hidden"
          name="reservationId"
          defaultValue={reservationId}
          hidden
        />
        <div className="relative space-y-2">
          <label
            htmlFor="numGuests"
            className="absolute -top-2 left-10 rounded-full bg-dark-200 px-4 py-1 text-sm text-secondary-50 sm:text-base"
          >
            How many guests?
          </label>
          <select
            name="numGuests"
            id="numGuests"
            className="w-full rounded-full border border-secondary-50 bg-dark-200 px-5 py-3 text-secondary-200 shadow-sm disabled:cursor-not-allowed disabled:text-secondary-400"
            defaultValue={numGuests}
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="relative space-y-2">
          <label
            htmlFor="observations"
            className="absolute -top-2 left-10 rounded-full bg-dark-200 px-4 py-1 text-sm text-secondary-50 sm:text-base"
          >
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            className="min-h-64 w-full rounded-3xl border border-secondary-50 bg-dark-200 px-5 py-3 text-secondary-200 shadow-sm focus:border-2 focus:outline-none disabled:cursor-not-allowed disabled:text-secondary-400"
            defaultValue={observations}
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <SubmitButton pendingLabel="Updating...">
            Update reservation
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
