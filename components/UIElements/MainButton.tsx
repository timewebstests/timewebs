import React from "react";
import Link from "next/link";
import { MainButtonProps } from "@/types";

const MainButton = ({ href, addedStyles, description }: MainButtonProps) => {
  return (
    <Link
      href={`${href}`}
      className={` ${addedStyles} w-auto flex justify-start bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6] items-center h-[50px] hover:to-[#94fbff] hover:from-[#b692ff] text-white font-bold p-5 mt-5 rounded-full`}
    >
      {description}
    </Link>
  );
};

export default MainButton;
