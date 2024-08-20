import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { AnimationCabins } from "./Animation";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <AnimationCabins reload={id}>
      <div className="box itemCabin relative flex h-80 rounded-lg border border-solid border-secondary-50">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="absolute z-0 h-full w-full rounded-lg brightness-50"
        />

        {discount && (
          <div className="absolute -right-5 -top-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-secondary-50 bg-dark-200 p-6 text-lime-50 line-through">
            ${regularPrice}
          </div>
        )}
        <div className="absolute left-0 top-0 m-5">
          <h3 className="mb-3 text-xl text-secondary-50 sm:text-2xl">
            Cabin {name}
          </h3>
          <div className="mb-2 flex items-center gap-3">
            <UsersIcon className="h-5 w-5 text-secondary-50" />
            <p className="text-lg text-secondary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>
        </div>

        <div className="boxRound border-collapse-l absolute -bottom-[2px] -right-5 flex h-1/5 w-2/3 -skew-x-[20deg] items-center justify-center gap-5 rounded-tl-3xl border-l border-t border-l-secondary-50 border-t-secondary-50 bg-dark-300">
          <div className="absolute right-0 top-0 h-1 w-7 -translate-y-1 bg-dark-300"></div>
          <div className="translate-x-2 skew-x-[20deg] rounded-full bg-dark-200 px-5 py-4 text-xs text-secondary-200 sm:translate-x-4 sm:py-2 lg:mt-4 lg:text-base xl:translate-x-0 xl:text-lg">
            ${discount > 0 ? regularPrice - discount : regularPrice}
          </div>
          <Link
            href={`/cabins/${id}`}
            className="details mr-5 skew-x-[20deg] rounded-full bg-dark-200 px-5 py-2 text-center text-xs text-secondary-200 transition-all duration-300 focus-within:bg-dark-50 focus-within:text-secondary-100 hover:bg-dark-50 hover:text-secondary-100 lg:mt-4 lg:text-base xl:text-lg"
          >
            Details & reservation
          </Link>
        </div>
      </div>
    </AnimationCabins>
  );
}

export default CabinCard;
