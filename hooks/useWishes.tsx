import { useEffect, useState } from "react";
import { ProductsSchema } from "@/schemas";
import { getProductsByIds } from "@/functions/getProducts";

export function useWishes({
  search = "",
  disabled = false,
}: {
  search?: string;
  disabled?: boolean;
}): {
  wishes: ProductsSchema;
  isLoading: boolean;
  isError: boolean;
} {
  const [wishes, setWishes] = useState<ProductsSchema>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (disabled || search === "") return;

    setIsError(false);
    setIsLoading(true);

    try {
      getProductsByIds(
        search
          .split(",")
          .map((id) => id.trim())
          .filter((id) => id !== "")
          .map((id) => parseInt(id))
      ).then(setWishes);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [search, disabled]);

  if (search === "") return { wishes: [], isLoading: false, isError: false };
  return { wishes, isLoading, isError };
}
