import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";

import Image from "next/image";
import aboutImage from "@/public/about.jpg";
import { Animation } from "@/app/_components/Animation";

export const metadata = {
  title: "About",
};

async function page() {
  return (
    <div className="overflow-hidden">
      <Animation>
        <h1 className="titleText fixed top-0 z-10 my-28 flex w-full justify-center space-x-5 text-5xl tracking-wider sm:block sm:space-x-10 md:m-5 md:my-10 md:text-7xl xl:text-9xl">
          <span className="text-secondary-50">BOGOR</span>
          <span className="text-secondary-200">CABIN</span>
        </h1>

        <div className="flex w-full text-base">
          <div className="z-10 mx-5 mt-48 w-full text-center sm:w-1/3">
            <h2 className="subText text-secondary-50">
              Escape to tranquility in the heart of nature. Cozy cabins with
              breathtaking views, where mountains meet the lake. Your serene
              retreat awaits.
            </h2>
            <p className="subText mt-5 h-52 overflow-auto text-secondary-200 sm:h-auto">
              Discover the ultimate escape at BOGOR CABIN, where luxury meets
              nature. Nestled between the majestic mountains and a tranquil
              lake, our cabins offer a peaceful retreat from the everyday
              hustle. Wake up to the sound of birds singing, enjoy stunning
              views from your private deck, and immerse yourself in the natural
              beauty surrounding you. Whether you're exploring the nearby
              forests or simply unwinding in your cozy cabin, BOGOR CABIN
              provides the perfect setting for relaxation and rejuvenation. Come
              experience serenity like never before.
            </p>
          </div>
          <div className="fixed z-0 h-[100dhv] w-full sm:relative sm:w-2/3">
            <Image
              src={aboutImage}
              placeholder="blur"
              quality={80}
              className="image fixed z-0 h-full w-full object-cover object-top sm:relative sm:rounded-3xl lg:rounded-3xl lg:rounded-bl-[215px]"
              alt="Cabin"
            />
            <div className="icons fixed bottom-28 flex h-auto w-full justify-center sm:relative sm:bottom-auto sm:block">
              <div className="z-10 flex h-auto items-center justify-center gap-5 rounded-full border border-secondary-50 px-5 py-3 sm:absolute sm:bottom-10 sm:right-10">
                <FaInstagram
                  className="h-7 w-7 sm:h-10 sm:w-10"
                  style={{ color: "#00FF99" }}
                />
                <FaFacebook
                  className="h-7 w-7 sm:h-10 sm:w-10"
                  style={{ color: "#00FF99" }}
                />
                <FaXTwitter
                  className="h-7 w-7 sm:h-10 sm:w-10"
                  style={{ color: "#00FF99" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Animation>
    </div>
  );
}

export default page;
