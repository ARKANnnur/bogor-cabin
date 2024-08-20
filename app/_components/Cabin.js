import Image from "next/image";
import TextExpander from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="titleText flex h-auto w-full flex-wrap items-stretch gap-5 p-5 py-10 sm:flex-nowrap lg:py-5">
      <div className="relative h-64 w-3/5 flex-grow overflow-hidden rounded-3xl border border-secondary-50 sm:h-auto">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-2/5 flex-grow rounded-3xl border border-secondary-50 p-5">
        <h3 className="text-lg text-secondary-50 sm:text-4xl">Cabin {name}</h3>

        <p className="my-5 text-lg text-secondary-200">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="mb-7 flex flex-col gap-4 text-base text-secondary-50">
          <li className="flex items-center gap-3">
            <UsersIcon className="h-5 w-5" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex items-center gap-3">
            <MapPinIcon className="h-5 w-5" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex items-center gap-3">
            <EyeSlashIcon className="h-5 w-5" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
