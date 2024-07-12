import PreviewBox from "./PreviewBox";
import Image from "next/image";
export default function HeroSection() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <Image
          src="/hero.webp"
          alt=""
          width={2000}
          height={2000}
          className="object-cover absolute inset-0 h-full w-full z-10"
        ></Image>
      </div>
      <div className="w-full h-full bg-gradient-to-t from-gray-800 to-red-500 absolute inset-0 z-10 opacity-50"></div>
      <div className="w-full h-12 bg-gradient-to-t from-zinc-950 absolute bottom-0 z-10"></div>
      <div className="z-20 -translate-y-10">
        <div className="text-white text-center relative z-30 flex flex-col gap-5">
          <h1 className=" border rounded-lg w-max mx-auto px-2 py-1 bg-gray-50 text-gray-900 font-semibold text-sm">
            #BeAmbitious
          </h1>
          <h1 className="text-6xl font-bold tracking-wider">INSANE AMBITION</h1>
          <p className="text-base lg:text-lg max-w-sm lg:max-w-md mx-auto">
            For the world&apos;s most ambitious founders, investors,
            researchers, and change-makers.
          </p>
        </div>
      </div>
      <div className="absolute w-full bottom-4 flex overflow-scroll gap-5 z-20 p-4">
        <PreviewBox
          image="/oliver.png"
          description="BUILDING A STARTUP CITY"
        ></PreviewBox>
        <PreviewBox
          image="/reebok.png"
          description="WORLD WARS, PEACE, BLACKOUTS"
        ></PreviewBox>{" "}
        <PreviewBox
          image="/ethan.png"
          description="THE DARK SIDE OF SOCIAL MEDIA"
        ></PreviewBox>{" "}
        <PreviewBox
          image="/founders.png"
          description="THE RIVALS TURNED PARTNERS"
        ></PreviewBox>{" "}
      </div>
    </div>
  );
}
