import TopPart from "@/components/header/parts/TopPart";
import LogoPart from "@/components/header/parts/LogoPart";
import BottomPart from "@/components/header/parts/BottomPart";
import { HeaderProps } from "@/types";

export default function Header({ home, products }: HeaderProps) {
  return (
    <div className="flex justify-between w-full h-[80px] bg-white border-2 px-20 max-[900px]:px-5">
      <div className="w-[33%] max-[900px]:hidden flex justify-start h-[80px] items-center">
        <LogoPart />
      </div>
      <div className="w-[33%] max-[900px]:w-[50%] flex justify-center max-[900px]:justify-start h-[80px] items-center">
        <TopPart />
      </div>
      <div className="w-[33%] max-[900px]:w-[50%] flex justify-end h-[80px] items-center">
        <BottomPart home={home} products={products} />
      </div>
    </div>
  );
}
