import { sql } from "@vercel/postgres";

export default async function ProductsApi() {
  const { rows } = await sql`SELECT * from products`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id_product}>
          {row.title} - {row.price}
        </div>
      ))}
    </div>
  );
}
