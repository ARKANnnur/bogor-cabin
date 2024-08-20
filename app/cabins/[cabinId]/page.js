import { Animation } from "@/app/_components/Animation";
import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return ids;
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);

  return (
    <Animation>
      <div className="mx-auto mb-20 max-w-6xl">
        <Cabin cabin={cabin} />

        <div>
          <h2 className="subText my-10 text-center text-5xl font-semibold text-accent-400">
            Reserve {cabin.name} today. Pay on arrival.
          </h2>
        </div>

        <Suspense
          fallback={
            <div className="fixed right-1/2 top-1/2">
              <Spinner />
            </div>
          }
        >
          <Reservation cabin={cabin} key={params.cabinId} />
        </Suspense>
      </div>
    </Animation>
  );
}
