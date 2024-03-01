import { ProductsCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShoppingCard = ({
  imgName,
  title,
  description,
  buttonHref,
}: ProductsCardProps) => {
  return (
    <Link
      href={`${buttonHref}`}
      className="w-[300px] max-[300px]:w-full min-h-[300px] h-auto bg-white rounded-lg flex-wrap transition duration-500 hover:scale-105"
    >
      <div className="w-full h-[230px] flex rounded-lg">
        <Image
          src={`/${imgName}.jpg`}
          alt=""
          width={300}
          height={230}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="w-full h-[70px] flex rounded-b-lg justify-center items-center flex-wrap">
        <div className="w-full flex justify-center text-xl font-semibold">
          {title}
        </div>
        <div className="w-full flex justify-center text-lg font-medium text-gray-500">
          {description}
        </div>
      </div>
    </Link>
  );
};

export default ShoppingCard;
