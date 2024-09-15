import Image from "next/image";
export default function PreviewBox({ image }: { image: string }) {
  return (
    <div className="h-44 relative W-52">
      <Image
        src={image}
        alt={image}
        width={1000}
        height={1000}
        className="w-full h-full object-cover rounded-lg"
      ></Image>
    </div>
  );
}
