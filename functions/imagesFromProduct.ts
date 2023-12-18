import { type ProductSchema } from "@/schemas";

/**
 * Returns an array of image URLs from a product
 */
export function imagesFromProduct(product: ProductSchema): string[] {
  const media = product.media;

  // Backend returns an empty array if there is no media
  if (Array.isArray(media)) return [];

  if (typeof media === "object" && media !== null) {
    return media["thumb-4x5"];
  }

  console.warn("No media found for product: ", product.id);
  return [];
}
