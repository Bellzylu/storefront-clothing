import { useEffect, useState } from "react";
import { ProductsSchema } from "@/schemas";
import { getAllProducts } from "@/functions/getProducts";

export function useProducts({
  search = "",
  disabled = false,
}: {
  search?: string;
  disabled?: boolean;
}): {
  products: ProductsSchema;
  isLoading: boolean;
  isError: boolean;
} {
  const [products, setProducts] = useState<ProductsSchema>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (disabled) return;

    setIsLoading(true);
    setIsError(false);

    try {
      getAllProducts(search).then(setProducts);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [search, disabled]);

  return { products, isLoading, isError };
}
