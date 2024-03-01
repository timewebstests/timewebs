import ProductsCard from "@/components/UIElements/ProductsCard";
import ShoppingCard from "@/components/UIElements/ShoppingCard";
import Header from "@/components/header/HeaderBase";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-wrap justify-center w-full p-0 bg-[#ffffff]">
      <Header home="text-gray-600" products="text-blue-600" />
      <div className="w-full flex justify-center bg-blue-500 h-[150px]">
        <div className="w-[60%] flex p-5 items-center text-4xl font-bold text-white">
          I Nostri Prodotti
        </div>
      </div>
      <div className="w-[70%] flex justify-center mt-16 flex-wrap gap-20 max-[970px]:space-y-10 mb-14">
        <ShoppingCard
          imgName="3dShapes"
          title="Begginer Website"
          description="200€"
          buttonHref="/product/"
        />
        <ShoppingCard
          imgName="3dShapes"
          title="Begginer Website"
          description="200€"
          buttonHref="/product/"
        />
        <ShoppingCard
          imgName="3dShapes"
          title="Begginer Website"
          description="200€"
          buttonHref="/product/"
        />
        <ShoppingCard
          imgName="3dShapes"
          title="Begginer Website"
          description="200€"
          buttonHref="/product/"
        />
        <ShoppingCard
          imgName="3dShapes"
          title="Begginer Website"
          description="200€"
          buttonHref="/product/"
        />
      </div>
    </div>
  );
};

export default page;
