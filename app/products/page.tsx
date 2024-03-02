import ProductsApi from "@/components/UIElements/ProductsApi";
import ProductsCard from "@/components/UIElements/ProductsCard";
import ShoppingCard from "@/components/UIElements/ShoppingCard";
import Header from "@/components/header/HeaderBase";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

const page = async () => {
  const { rows } =
    await sql`SELECT id_product, title, price, image FROM products ORDER BY price ASC LIMIT 9;`;

  return (
    <div className="flex flex-wrap justify-center w-full p-0 bg-[#ffffff]">
      <Header home="text-gray-600" products="text-blue-600" />
      <div className="w-full flex justify-center bg-blue-500 h-[150px]">
        <div className="w-[60%] flex p-5 items-center text-4xl font-bold text-white">
          I Nostri Prodotti
        </div>
      </div>
      <div className="w-[70%] flex justify-center mt-16 flex-wrap gap-20 max-[970px]:space-y-10 mb-14">
        {rows.map((row) => (
          <ShoppingCard
            key={row.id_product}
            imgName="3dShapes"
            title={row.title}
            description={row.price}
            buttonHref="/product/"
          />
        ))}
      </div>
    </div>
  );
};

export default page;
