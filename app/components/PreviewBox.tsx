import Image from "next/image";
export default function PreviewBox({
  image,
  description,
}: {
  image: string;
  description: string;
}) {
  return (
    <div className="h-50 relative min-w-[360px]">
      <div className="w-full h-12 bg-gradient-to-t from-black absolute bottom-0 z-10"></div>
      <Image
        src={image}
        alt={image}
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
      ></Image>
      <p className="absolute bottom-2 text-white w-full text-xs font-semibold px-2 z-20">
        {description}
      </p>
    </div>
  );
}
