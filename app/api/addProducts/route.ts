import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id_product = 5;
  const title = "StartUp Website";
  const price = 700;
  const image = "imagelink5";

  try {
    //await sql`DELETE FROM products WHERE id_product = 3;`;
    await sql`INSERT INTO products (id_product, title, price, image) VALUES (${id_product}, ${title}, ${price}, ${image});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const products =
    await sql`SELECT id_product, title, price, image FROM products;`;
  return NextResponse.json({ products }, { status: 200 });
}
