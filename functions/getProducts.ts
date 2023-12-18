import { ProductsSchema } from "@/schemas";

export async function getAllProducts(search = ""): Promise<ProductsSchema> {
  const response = await fetch(
    "https://frend-fe-case.vercel.app/api/products",
    {
      method: "POST",
      body: JSON.stringify({
        limit: 40,
        skipFirst: 0,
        search,
      }),
    }
  );
  const json = await response.json();
  console.log("json: ", json);

  const parsed = ProductsSchema.safeParse(json);
  if (!parsed.success) {
    parsed.error?.errors.forEach((error) => console.error(error));
    console.error("Failed to parse response");
    return [];
  }
  return parsed.data;
}

export async function getProductsByIds(ids: number[]): Promise<ProductsSchema> {
  const response = await fetch(
    "https://frend-fe-case.vercel.app/api/products",
    {
      method: "POST",
      body: JSON.stringify({
        products: ids,
      }),
    }
  );
  const json = await response.json();
  console.log("json: ", json);

  const parsed = ProductsSchema.safeParse(json);
  if (!parsed.success) {
    parsed.error?.errors.forEach((error) => console.error(error));
    console.error("Failed to parse response");
    return [];
  }
  return parsed.data;
}
