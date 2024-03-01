import Link from "next/link";
import MainButton from "../UIElements/MainButton";

export default function Center() {
  return (
    <div className="w-full flex justify-center text-black flex-nowrap">
      <div className="w-[100%] h-[calc(100vh-80px)] relative flex justify-center items-center">
        <img
          src="background.jpg"
          alt="background"
          className="flex w-[100%] h-[calc(100vh-80px)] object-cover"
        />
        <div className="flex absolute  max-[600px]:w-full w-[600px] h-[400px] bg-white rounded-3xl max-[600px]:rounded-none flex-wrap p-7 py-10">
          <div className="w-full flex justify-start text-black text-4xl font-bold">
            Time Webs
          </div>
          <div className="w-full flex justify-start text-[#1db4f8] text-6xl max-[470px]:text-3xl font-bold">
            Websites Developement
          </div>
          <MainButton href="" addedStyles="" description="SCOPRI DI PIÙ" />
        </div>
      </div>
    </div>
  );
}
