"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
import BlurFade from "@/components/magicui/blur-fade";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <div
      className={clsx(
        "fixed z-40 w-full px-4 lg:px-10 py-6 transition duration-300 ease-in-out",
        {
          "bg-transparent text-white": !isScrolled,
          "bg-black text-white": isScrolled,
        }
      )}
    >
      <div className="flex justify-between items-center">
        <div className="">
          <BlurFade delay={0.25 * 2 + 0.1} inView>
            {" "}
            <Image
              src="/logo.jpeg"
              width={1000}
              height={1000}
              alt="logo"
              className="object-cover w-12 h-12 rounded-lg"
            ></Image>
          </BlurFade>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden md:flex gap-5 text-sm items-center text-white/80">
            <BlurFade delay={0.25 * 2 + 0.1} inView>
              <Link href="" className="">
                Episodes
              </Link>
            </BlurFade>
            <BlurFade delay={0.25 * 2 + 0.2} inView>
              <Link href="" className="">
                About
              </Link>
            </BlurFade>
            <BlurFade delay={0.25 * 2 + 0.3} inView>
              <Link href="" className="">
                <Image src="/youtube.svg" alt="" width={24} height={24}></Image>
              </Link>
            </BlurFade>{" "}
            <BlurFade delay={0.25 * 2 + 0.4} inView>
              <Link href="" className="">
                <Image src="/spotify.svg" alt="" width={24} height={24}></Image>
              </Link>
            </BlurFade>{" "}
            <BlurFade delay={0.25 * 2 + 0.5} inView>
              <Link href="" className="">
                <Image
                  src="/linkedin.svg"
                  alt=""
                  width={24}
                  height={24}
                ></Image>
              </Link>
            </BlurFade>
          </div>
          <BlurFade delay={0.25 * 2 + 0.6} inView>
            <Link
              href="/"
              className="border font-semibold text-sm  px-3 py-2 hover:-translate-x-1 hover:-translate-y-1 hover:bg-white hover:text-black transition duration-300"
            >
              SUBSCRIBE
            </Link>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
