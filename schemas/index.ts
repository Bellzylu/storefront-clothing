import { z } from "zod";

export const ProductSchema = z
  .object({
    availabe: z.boolean(),
    brand: z.string(),
    brandName: z.string(),
    categories: z.array(
      z.object({
        pathsIds: z.string(),
        sortOrder: z.number(),
        name: z.array(z.string()),
        category: z.string(),
        uri: z.string(),
      })
    ),
    category: z.string(),
    categoryName: z.array(z.string()),
    categoryUri: z.string(),
    centraVariant: z.string(),
    collection: z.string(),
    collectionName: z.string(),
    collectionUri: z.string(),
    countryOrigin: z.string(),
    createdAt: z.string(),
    description: z.string(),
    descriptionHtml: z.string(),
    excerpt: z.string(),
    excerptHtml: z.string(),
    itemQuantityMinimum: z.number(),
    itemQuantityMultipleOf: z.number(),
    itemTable: z.record(z.unknown()),
    items: z.array(
      z.object({
        ean: z.string(),
        item: z.string(),
        itemTableX: z.number(),
        itemTableY: z.number(),
        name: z.string(),
        sizeId: z.string(),
        sku: z.string(),
        stock: z.string(),
        upc: z.string(),
        warehouses: z.array(
          z.object({
            stock: z.number(),
            warehouse: z.number(),
          })
        ),
      })
    ),
    measurementChart: z.array(z.unknown()).or(z.record(z.unknown())),
    media: z
      .object({
        "full-3x4": z.array(z.string()),
        "full-4x5": z.array(z.string()),
        "thumb-3x4": z.array(z.string()),
        "thumb-4x5": z.array(z.string()),
      })
      .or(z.array(z.unknown())),
    mediaObjects: z.array(z.record(z.unknown())),
    metaDescription: z.string(),
    metaKeywords: z.string(),
    metaTitle: z.string(),
    modifiedAt: z.string(),
    name: z.string(),
    pr_advice_fit: z.string(),
    pr_colors: z.array(
      z.object({
        code: z.string(),
        image: z.record(z.unknown()),
        name: z.string(),
        synonyms: z.string(),
      })
    ),
    pr_composition: z.array(z.unknown()),
    pr_swatch: z.record(z.unknown()),
    prices: z.object({
      21: z.object({
        discountPercent: z.number(),
        price: z.string(),
        lowestPrice: z.array(z.unknown()),
        printPrice: z.array(z.number()),
      }),
      19: z.object({
        discountPercent: z.number(),
        price: z.string(),
        lowestPrice: z.array(z.unknown()),
        printPrice: z.array(z.number()),
      }),
      22: z.object({
        discountPercent: z.number(),
        price: z.string(),
        lowestPrice: z.array(z.unknown()),
        printPrice: z.array(z.number()),
      }),
      23: z.object({
        discountPercent: z.number(),
        price: z.string(),
        lowestPrice: z.array(z.unknown()),
        printPrice: z.array(z.number()),
      }),
      24: z.object({
        discountPercent: z.number(),
        price: z.string(),
        lowestPrice: z.array(z.unknown()),
        printPrice: z.array(z.number()),
      }),
      25: z.object({
        discountPercent: z.number(),
        price: z.string(),
        lowestPrice: z.array(z.unknown()),
        printPrice: z.array(z.number()),
      }),
    }),

    product: z.string(),
    productSku: z.string(),
    relatedProducts: z.array(z.unknown()),
    relation: z.string(),
    sku: z.string(),
    stockUnit: z.string(),
    subscriptionPlans: z.array(z.unknown()),
    uri: z.string(),
    variantName: z.string(),
  })
  .deepPartial();
export type ProductSchema = z.infer<typeof ProductSchema>;
export const ProductsSchema = z.array(ProductSchema);
export type ProductsSchema = z.infer<typeof ProductsSchema>;
