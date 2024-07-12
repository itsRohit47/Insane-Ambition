import Link from "next/link";
import Image from "next/image";
import { Share2Icon, PlayIcon } from "@radix-ui/react-icons";
export default function PodcastCard({
  title,
  description,
  timeago,
  length,
  tags,
  number,
  image,
}: {
  title: string;
  description: string;
  timeago: string;
  length: string;
  tags: string[];
  number: number;
  image: string;
}) {
  return (
    <div className="text-white grid lg:grid-cols-3 gap-5 hover:bg-zinc-50/25 p-4 rounded-lg cursor-pointer transition duration-500">
      <div className="h-full w-full lg:col-span-1 relative rounded-lg">
        <Image
          src={image}
          alt=""
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-lg"
        ></Image>
        <div className="w-full h-full bg-black absolute inset-0 z-10 opacity-20"></div>
        <div className="absolute bottom-4 right-4 bg-white rounded-full h-12 w-12 flex items-center justify-center z-10 hover:opacity-50">
          <Image src="/play.svg" alt="" width={20} height={20}></Image>
        </div>
        <div className="absolute rounded-lg h-20 w-20 bottom-0 ">
          <Image
            src="/logo.ico"
            alt=""
            width={200}
            height={200}
            className="rounded-lg"
          ></Image>
        </div>
      </div>
      <div className="flex flex-col gap-5 lg:col-span-2">
        <div className="flex gap-3 text-xs font-semibold text-gray-300">
          {" "}
          <div className="">Episode {number}</div>
          <div className="">|</div>
          <div className="">{timeago}</div>
          <div className="">|</div>
          <div className="">{length}</div>
        </div>

        <div className="text-2xl font-bold">
          <div className="">{title}</div>
        </div>
        <div className="">
          <p className="text-sm text-gray-300">{description}</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="text-xs bg-gray-300 text-gray-800 font-semibold px-2 py-1 rounded w-max"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex">
          <div className="bg-red-500 rounded-l-full h-2 w-10 lg:w-60"></div>
          <div className="bg-zinc-50/25 rounded-r-full h-2 w-40 lg:w-52"></div>
        </div>
        <div className="flex gap-3">
          <Link href="">
            <Image src="/spotify.svg" alt="" width={20} height={20}></Image>
          </Link>
          <Link href="">
            <Image src="/youtube.svg" alt="" width={20} height={20}></Image>
          </Link>
          <Link href="">
            <Share2Icon width={20} height={20}></Share2Icon>
          </Link>
        </div>
      </div>
    </div>
  );
}
