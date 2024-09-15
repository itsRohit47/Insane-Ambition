import PreviewBox from "./PreviewBox";
import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/magicui/marquee";
import BlurFade from "@/components/magicui/blur-fade";

export default function HeroSection() {
  return (
    <div className="h-screen flex flex-col items-center justify-end w-screen relative z-10">
      <div>
        <Image
          src="/ben.jpeg"
          alt=""
          fill={true}
          className="object-cover absolute inset-0 h-full w-full"
        ></Image>
      </div>
      <div className="w-full h-full bg-gradient-to-l from-black from-50% absolute inset-0"></div>
      <div className="w-full h-12 bg-gradient-to-t from-black absolute bottom-0"></div>
      <div className="grid grid-cols-2 w-full h-full">
        <div></div>
        <div className=" pt-20">
          <BlurFade
            delay={0.25 * 2}
            inView
            className="flex flex-col justify-center gap-5 text-white z-40 pt-20 pl-10"
          >
            <div className="bg-white/25 h-52 w-52 -z-10 blur-3xl absolute"></div>
            <h1 className="text-5xl font-semibold">Insane Ambition</h1>
            <p className="text-sm text-white/80 pr-40">
              Tempor voluptate est exercitation exercitation aute pariatur ad
              fugiat. Et Lorem consectetur in ex mollit elit aute occaecat
              adipisicing velit. Quis cillum non occaecat nulla dolor. Lorem
              quis eu ut voluptate deserunt deserunt et consequat mollit ad
              cillum pariatur. Pariatur laborum ex adipisicing ex exercitation.
            </p>
            <div className="flex gap-5">
              {" "}
              <Link
                href="/"
                className="border font-semibold text-sm px-3 py-2 hover:-translate-x-1 hover:-translate-y-1 hover:bg-white hover:text-black transition duration-300"
              >
                SUBSCRIBE
              </Link>
              <Link
                href="/"
                className="border font-semibold text-sm  px-3 py-2 hover:-translate-x-1 hover:-translate-y-1 hover:bg-white hover:text-black transition duration-300"
              >
                EPISODES
              </Link>
            </div>
          </BlurFade>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className=""></div>
        <div className="relative">
          <Marquee reverse className="[--duration:60s]">
            <BlurFade delay={0.25 * 2 + 0.1} inView>
              {" "}
              <PreviewBox image="/preview1.jpg"></PreviewBox>
            </BlurFade>
            <BlurFade delay={0.25 * 2 + 0.2} inView>
              {" "}
              <PreviewBox image="/preview1.jpg"></PreviewBox>
            </BlurFade>{" "}
            <BlurFade delay={0.25 * 2 + 0.3} inView>
              {" "}
              <PreviewBox image="/preview1.jpg"></PreviewBox>
            </BlurFade>
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black"></div>
        </div>
      </div>
      <div className="w-full">
        <Marquee className="[--duration:60s]">
          <BlurFade delay={0.25 * 2 + 0.4} inView>
            {" "}
            <PreviewBox image="/preview1.jpg"></PreviewBox>
          </BlurFade>{" "}
          <BlurFade delay={0.25 * 2 + 0.5} inView>
            {" "}
            <PreviewBox image="/preview1.jpg"></PreviewBox>
          </BlurFade>{" "}
          <BlurFade delay={0.25 * 2 + 0.6} inView>
            {" "}
            <PreviewBox image="/preview1.jpg"></PreviewBox>
          </BlurFade>
        </Marquee>
      </div>
    </div>
  );
}
