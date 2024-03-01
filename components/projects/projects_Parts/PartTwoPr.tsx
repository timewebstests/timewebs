import MainButton from "@/components/UIElements/MainButton";
import ProductsCard from "@/components/UIElements/ProductsCard";
import Link from "next/link";

export default function PartTwoPr() {
  return (
    <div className="w-full flex justify-center flex-wrap">
      <div className="w-[60%] max-[700px]:w-[100%] flex justify-center text-6xl max-[400px]:text-3xl text-center font-bold text-white">
        I Nostri Prodotti
      </div>
      <div className="w-[70%] flex justify-center pt-32 flex-nowrap max-[1650px]:w-full max-[1650px]:flex-wrap gap-20 max-[970px]:space-y-10">
        <ProductsCard
          imgName="clessidra"
          title=""
          description=""
          buttonHref=""
        />
        <ProductsCard
          imgName="clessidra"
          title=""
          description=""
          buttonHref=""
        />
        <ProductsCard
          imgName="clessidra"
          title=""
          description=""
          buttonHref=""
        />
      </div>
    </div>
  );
}
