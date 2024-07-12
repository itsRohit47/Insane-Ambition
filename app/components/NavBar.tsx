"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";

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
        "fixed z-40 w-full px-4 lg:px-10 py-5 transition duration-500 ease-in-out",
        {
          "bg-transparent text-white": !isScrolled,
          "bg-black text-white": isScrolled,
        }
      )}
    >
      <div className="flex justify-between items-center">
        <div className="">
          <Image
            src="/logo.jpeg"
            width={1000}
            height={1000}
            alt="logo"
            className="object-cover w-12 h-12 rounded-lg"
          ></Image>
        </div>
        <div className="hidden md:flex gap-5 text-sm font-medium items-center">
          <Link href="">Episodes</Link>
          <Link href="">About</Link>
          <Link href="">
            <Image src="/linkedin.svg" alt="" width={24} height={24}></Image>
          </Link>
          <Link href="">
            <Image src="/spotify.svg" alt="" width={24} height={24}></Image>
          </Link>
          <Link href="">
            <Image src="/youtube.svg" alt="" width={24} height={24}></Image>
          </Link>
        </div>
        <div>
          <Link href="" className="px-3 py-2 border font-bold text-sm">
            SUBSCRIBE
          </Link>
        </div>
      </div>
    </div>
  );
}
