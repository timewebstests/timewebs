import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaBarsStaggered,
} from "react-icons/fa6";

export default function Team() {
  return (
    <div className="w-full flex justify-center mb-14">
      <div className="w-full flex justify-center flex-wrap space-y-20">
        <div className="w-[70%] max-[550px]:w-full flex justify-center text-6xl max-[550px]:text-4xl text-left font-bold text-[#1db4f8]">
          Il nostro Team
        </div>
        <div className="w-full flex justify-center relative">
          <div className="flex w-full justify-evenly bg-gradient-to-r from-[#537eff] to-[#00dede] min-[930px]:space-x-5 min-h-[800px] max-[950px]:space-y-10 p-5 max-[1850px]:flex-wrap items-center h-auto rounded-3xl">
            <div className="max-w-[350px] max-[300px]:w-full min-h-[450px] p-5 h-auto max-[1320px]:mt-0 mt-5 bg-white shadow-2xl rounded-xl space-y-3">
              <img
                src="3dShapes.jpg"
                alt=""
                className="flex w-[100%] h-[25vh] object-cover rounded-xl"
              />
              <div className="w-full flex justify-start text-3xl font-bold text-[#1bd4f8]">
                Anthony
              </div>
              <div className="w-full flex justify-start text-2xl font-bold text-gray-400">
                Programming Guru
              </div>
              <div className="w-full flex justify-start text-2xl font-bold text-gray-500 space-x-5">
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
            <div className="max-w-[350px] max-[300px]:w-full min-h-[450px] p-5 h-auto max-[1320px]:mt-0 mt-20 shadow-2xl bg-white rounded-xl space-y-3">
              <img
                src="3dShapes.jpg"
                alt=""
                className="flex w-[100%] h-[25vh] object-cover rounded-xl"
              />
              <div className="w-full flex justify-start text-3xl font-bold text-[#1bd4f8]">
                Emma
              </div>
              <div className="w-full flex justify-start text-2xl font-bold text-gray-400">
                Agente
              </div>
              <div className="w-full flex justify-start text-2xl font-bold text-gray-500 space-x-5">
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
            <div className="max-w-[350px] max-[300px]:w-full min-h-[450px] p-5 h-auto max-[1320px]:mt-5 shadow-2xl mt-40 bg-white rounded-xl space-y-3">
              <img
                src="3dShapes.jpg"
                alt=""
                className="flex w-[100%] h-[25vh] object-cover rounded-xl"
              />
              <div className="w-full flex justify-start text-3xl font-bold text-[#1bd4f8]">
                James
              </div>
              <div className="w-full flex justify-start text-2xl font-bold text-gray-400">
                Agente
              </div>
              <div className="w-full flex justify-start text-2xl font-bold text-gray-500 space-x-5">
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
      </div>
    </div>
  );
}
