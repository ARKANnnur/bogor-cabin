import Image from "next/image";
import home from "@/public/home.png";
import { Animation } from "@/app/_components/Animation";

export default function Page() {
  return (
    <main>
      <Image
        src={home}
        fill
        placeholder="blur"
        quality={80}
        className="z-10 object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 flex h-dvh w-dvw items-center justify-center">
        <h1 className="flex items-center justify-center space-x-5 text-5xl sm:space-x-10 md:text-7xl lg:text-9xl">
          <Animation>
            <div className="fadeLeft text-base-50">Bogor</div>
            <div className="fadeRight text-base-500">Cabin</div>
          </Animation>
        </h1>
      </div>
    </main>
  );
}
