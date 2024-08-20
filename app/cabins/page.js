import { Suspense } from "react";
import CabinsList from "@/app/_components/CabinsList";
import Spinner from "@/app/_components/Spinner";
import Filter from "@/app/_components/Filter";
import ReservationReminder from "@/app/_components/ReservationReminder";
import { Animation } from "@/app/_components/Animation";

// export const revalidate = 0;
export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div className="p-10 pb-20">
      <Animation>
        <h1 className="fadeLeft mb-5 text-5xl font-medium text-accent-400">
          Cabins
        </h1>
        <p className="fadeLeft mb-5 text-base text-primary-200">
          Charming yet tranquil cabins nestled in the serene landscapes of
          Bogor, where the mountains meet the lake. Picture yourself waking up
          to the soothing sounds of nature, surrounded by lush greenery and
          breathtaking views. Spend your days exploring the nearby forests, or
          simply unwind in the comfort of your private deck overlooking the
          water. BOGOR CABIN offers the perfect escape for those seeking peace
          and rejuvenation in a cozy yet luxurious setting. Experience the
          beauty of nature, just a step away from your cabin door. Welcome to
          your serene retreat.
        </p>
        <div className="fadeRight m-5 flex justify-center sm:justify-end">
          <Filter />
        </div>
      </Animation>

      <Suspense
        fallback={
          <div className="fixed right-1/2 top-1/2">
            <Spinner />
          </div>
        }
        key={filter}
      >
        <CabinsList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
