import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const HomeCard = ({
  img,
  title,
  desc,
  handleClick,
  className,
}: {
  img: string;
  title: string;
  desc: string;
  handleClick: () => void;
  className: string;
}) => {
  return (
    <section
      className={cn(
        `px-4 py-6 flex flex-col justify-between w-full  min-h-[260px] rounded-[14px] cursor-pointer`,
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism w-12 h-12 rounded-[10px]">
        <Image
          src={img}
          // className="w-[27px] h-[27px] object-contain"
          alt={title}
          height={27}
          width={27}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{desc}</p>
      </div>
    </section>
  );
};

export default HomeCard;
