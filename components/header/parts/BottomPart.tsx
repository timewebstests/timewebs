import { HeaderProps } from "@/types";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaBarsStaggered,
} from "react-icons/fa6";

export default function BottomPart({ home, products }: HeaderProps) {
  const className =
    "hover:text-purple-500 text-black  hover:underline hover:underline-offset-2 hover:decoration-[#00ffea] decoration-4 pr-3";

  return (
    <div className="flex justify-end flex-nowrap w-auto items-center">
      <div className="flex justify-end gap-5 w-[100%] flex-nowrap max-[425px]:hidden">
        <div className={`hover:text-blue-600 ${home} font-semibold`}>
          <Link href="/">Home</Link>
        </div>
        <div className={`hover:text-blue-600 text-gray-600 font-semibold`}>
          <Link href="/#aboutus" className="min-w-[80px] flex">
            Chi siamo
          </Link>
        </div>
        <div className={`hover:text-blue-600 ${products} font-semibold`}>
          <Link href="/products">Prodotti</Link>
        </div>
        <div className={`hover:text-blue-600 text-gray-600 font-semibold`}>
          <Link href="/#contactus">Contattateci</Link>
        </div>
      </div>
      <div className="hidden justify-end gap-5 w-[100%] flex-nowrap max-[425px]:flex">
        <div className="hover:text-blue-600 pl-5">
          <FaBarsStaggered size={23} />
        </div>
      </div>
    </div>
  );
}
