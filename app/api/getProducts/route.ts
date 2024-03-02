import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const products =
    await sql`SELECT id_product, title, price, image FROM products;`;
  return NextResponse.json({ products }, { status: 200 });
}
