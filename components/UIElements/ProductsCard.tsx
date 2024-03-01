import React from "react";
import MainButton from "./MainButton";
import { ProductsCardProps } from "@/types";

const ProductsCard = ({
  imgName,
  title,
  description,
  buttonHref,
}: ProductsCardProps) => {
  return (
    <div className="w-[350px] min-h-[500px] h-auto bg-white rounded-2xl flex-wrap p-5 space-y-5">
      <div className="w-full flex justify-center items-center p-10 relative">
        <img
          src={`${imgName}.png`}
          alt={imgName}
          className="absolute flex w-[70px] h-[130px] mix-blend-multiply -top-20"
        />
      </div>
      <div className="w-full flex justify-center text-center items-center text-xl font-bold text-[#1db4f8]">
        {title}
      </div>
      <div className="w-full h-auto text-black text-lg text-center">
        {description}
      </div>
      <div className="w-full flex justify-center">
        <MainButton
          href={buttonHref}
          addedStyles=""
          description="SCOPRI DI PIÙ"
        />
      </div>
    </div>
  );
};

export default ProductsCard;
