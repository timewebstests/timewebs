"use client";

import { useState } from "react";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import MainButton from "../UIElements/MainButton";

export default function ExtraPartOne() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="w-full flex justify-center text-black flex-nowrap">
      <div className="w-[100%] h-[85vh] relative flex justify-center items-center">
        <img
          src="extraPtOne.jpg"
          alt="background"
          className="flex w-[100%] h-[85vh] object-cover"
        />
        {isVisible ? (
          <div className="flex absolute max-[600px]:w-full w-[600px] min-h-[400px] h-auto max-h-[800px] bg-white rounded-md flex-wrap p-16 py-10">
            <div className="w-full flex justify-center text-center text-[#1db4f8] text-6xl max-[470px]:text-3xl font-bold">
              Creatività
            </div>
            <div
              className="absolute flex justify-center w-[50px] h-[50px] items-center bg-gray-300 left-0 top-2/4 hover:bg-gray-200"
              onClick={toggleVisibility}
            >
              <FaAngleLeft size={20} />
            </div>
            <div
              className="absolute flex justify-center w-[50px] h-[50px] items-center bg-gray-300 right-0 top-2/4 hover:bg-gray-200"
              onClick={toggleVisibility}
            >
              <FaAngleRight size={20} />
            </div>
            <div className="w-full h-auto max-h-[700px] text-black/50 text-lg text-center overflow-hidden">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </div>
            <div className="w-full flex justify-center">
              <MainButton href="" addedStyles="" description="SCOPRI DI PIÙ" />
            </div>
            <div className="w-full flex justify-center">
              <GoDotFill color={"#1db4f8"} />
              <GoDot />
            </div>
          </div>
        ) : (
          <div className="flex absolute max-[600px]:w-full w-[600px] min-h-[400px] h-auto max-h-[800px] bg-white rounded-md flex-wrap p-16 py-10">
            <div className="w-full flex justify-center text-center text-[#1db4f8] text-6xl max-[470px]:text-3xl font-bold">
              Arte Visiva
            </div>
            <div
              className="absolute flex justify-center w-[50px] h-[50px] items-center bg-gray-300 left-0 top-2/4 hover:bg-gray-200"
              onClick={toggleVisibility}
            >
              <FaAngleLeft size={20} />
            </div>
            <div
              className="absolute flex justify-center w-[50px] h-[50px] items-center bg-gray-300 right-0 top-2/4 hover:bg-gray-200"
              onClick={toggleVisibility}
            >
              <FaAngleRight size={20} />
            </div>
            <div className="w-full h-auto max-h-[700px] text-black/50 text-lg text-center overflow-hidden">
              irmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
              diamLorem ipsum dccusam et justo duo dolores et ea rebum.olor sit
              amet, consetetur sadipscing elitr, sed diam nonumy e voluptua. At
              vero eos et a
            </div>
            <div className="w-full flex justify-center">
              <MainButton href="" addedStyles="" description="SCOPRI DI PIÙ" />
            </div>
            <div className="w-full flex justify-center">
              <GoDot />
              <GoDotFill color={"#1db4f8"} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
