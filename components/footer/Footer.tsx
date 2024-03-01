import { IoPhonePortraitOutline } from "react-icons/io5";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaBarsStaggered,
} from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full min-h-[250px] h-auto flex justify-center items-center bg-white">
      <div className="w-[70%] flex justify-center items-center space-x-5 max-[660px]:space-x-0 p-5 flex-nowrap max-[1650px]:w-full max-[1650px]:flex-wrap max-[640px]:space-y-10">
        <div className="w-[300px] max-[600px]:w-full max-h-[250px] h-[176px] flex justify-center text-center p-5 flex-wrap rounded-3xl bg-gradient-to-b from-[#95faff] to-[#415dff]">
          <div className="w-full text-2xl font-bold text-white my-5">
            CONTATTATECI
          </div>
          <div className="w-full min-w-[250px] text-white text-lg flex flex-wrap space-y-2">
            <p className="w-full flex justify-center items-center">
              <IoPhonePortraitOutline size={23} />
              +123 456 789
            </p>
            <p className="w-full flex justify-center items-center">
              <IoPhonePortraitOutline size={23} />
              +321 654 987
            </p>
          </div>
        </div>
        <div className="w-[300px] max-[600px]:w-full max-h-[250px] h-[176px] flex justify-center text-center p-5 flex-wrap rounded-3xl bg-gradient-to-b from-[#95faff] to-[#415dff]">
          <div className="w-full text-2xl font-bold text-white my-5">
            LOCATION
          </div>
          <div className="w-full min-w-[250px] text-white text-lg flex flex-wrap space-y-2">
            <p className="w-full flex justify-center items-center">
              <FaLocationDot size={23} />
              Roma, RM
            </p>
          </div>
        </div>
        <div className="w-[300px] max-[600px]:w-full max-h-[250px] h-[176px] flex justify-center text-center p-5 max-[978px]:mt-10 flex-wrap rounded-3xl bg-gradient-to-b from-[#95faff] to-[#415dff]">
          <div className="w-full text-2xl font-bold text-white my-5">
            SOCIAL
          </div>
          <div className="w-full min-w-[250px] text-white text-lg flex flex-wrap justify-center space-x-5">
            <div className="hover:text-[#1bd4f8]">
              <FaInstagram size={20} />
            </div>
            <div className="hover:text-[#1bd4f8]">
              <FaFacebook size={20} />
            </div>
            <div className="hover:text-[#1bd4f8]">
              <FaTwitter size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
