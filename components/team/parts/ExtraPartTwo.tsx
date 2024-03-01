import MainButton from "@/components/UIElements/MainButton";
import Link from "next/link";

export default function ExtraPartTwo() {
  return (
    <div className="w-full flex justify-center flex-wrap">
      <div className="w-[70%] flex justify-center flex-nowrap space-x-7">
        <div className="w-[50%] max-[1440px]:w-full flex justify-left text-left flex-wrap space-y-5">
          <div className="w-full flex justify-center mb-20">
            <img
              src="bgless.png"
              alt=""
              className="flex w-[100%] h-[20vh] object-cover mix-blend-multiply max-[1480px]:hidden"
            />
            <img
              src="3dShapes.jpg"
              alt=""
              className="hidden w-[100%] h-[20vh] object-cover mix-blend-multiply max-[1480px]:flex"
            />
          </div>
          <div className="w-full flex justify-left text-6xl max-[550px]:text-3xl text-left font-bold text-[#1db4f8]">
            Design & Development
          </div>
          <div className="w-full flex justify-left">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum.
          </div>
          <div className="w-full flex justify-start">
            <MainButton href="" addedStyles="" description="SCOPRI DI PIÙ" />
          </div>
        </div>
        <div className="w-[50%] flex justify-center max-[1400px]:hidden">
          <img
            src="3dShapes.jpg"
            alt=""
            className="flex w-[100%] h-[65vh] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
