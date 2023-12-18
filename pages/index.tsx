import Head from "next/head";
import { useProducts } from "@/hooks/useProducts";
import { useWishes } from "@/hooks/useWishes";
import { usePersistedQueryState } from "@/hooks/usePersistedQueryState";
import { SearchBar } from "@/components/SearchBar";
import { Card } from "@/components/Card";
import { CardGrid } from "@/components/CardGrid";
import { imagesFromProduct } from "@/functions/imagesFromProduct";
import styles from "./app.module.css";
import { ShareButton } from "@/components/ShareButton";
import { useRouter } from "next/router";

export default function Home() {
  const [search, setSearch] = usePersistedQueryState("search");
  const [wishlist, setWishlist] = usePersistedQueryState("wishlist");
  const [showWishlistState, setShowWishlist] =
    usePersistedQueryState("show-wishlist");
  const [selectedCurrencyKey, setSelectedCurrencyKey] =
    usePersistedQueryState("21");

  const { isReady } = useRouter();
  const showWishlist = isReady ? showWishlistState : "false";

  const {
    products,
    isLoading: isLoadingProducts, // TODO: Implement UI for loading state
    isError: isErrorProducts, // TODO: Implement UI for error state
  } = useProducts({ search: search ?? "" });

  const {
    wishes,
    isLoading: isLoadingWishes, // TODO: Implement UI for loading state
    isError: isErrorWishes, // TODO: Implement UI for error state
  } = useWishes({ search: wishlist ?? "" });

  const wishesSearched = wishes.filter(
    (wish) =>
      (search?.length === 0 ||
        search === null ||
        (typeof search === "string" &&
          wish.name?.toLowerCase().includes(search.toLowerCase()))) ??
      false
  );

  return (
    <>
      <Head>
        <title>byTiMo Products</title>
        <meta name="description" content="Search for by" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.searchContainer}>
        <SearchBar
          inputProps={{
            defaultValue: search ?? "",
          }}
          onSubmit={setSearch}
          onHeart={() => {
            if (showWishlist === "true") {
              setShowWishlist("false");
              return;
            }
            setShowWishlist("true");
          }}
          filledHeart={showWishlist === "true"}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.toolbar}>
          <select
            name="currency"
            className={styles.selectCurrency}
            value={selectedCurrencyKey ?? "21"}
            onChange={(e) => setSelectedCurrencyKey(e.target.value)}>
            <option value="21">NOK</option>
            <option value="19">SEK</option>
            <option value="22">DKK</option>
            <option value="23">GBP</option>
            <option value="24">EUR</option>
            <option value="25">USD</option>
          </select>
          <h2>{showWishlist === "true" ? "Wishlist" : "Products"}</h2>
          <ShareButton />
        </div>

        <div>
          <CardGrid>
            {(showWishlist === "true" ? wishesSearched : products).map(
              (product, i) => {
                const totalStock: number =
                  product.items
                    ?.flatMap((item) => item.warehouses)
                    .reduce(
                      (total, warehouse) => total + (warehouse?.stock ?? 0),
                      0
                    ) ?? 0;

                const stockStatus =
                  totalStock === 0
                    ? "Out of stock"
                    : totalStock < 4
                    ? `Only ${totalStock} left`
                    : undefined;

                const safeCurrencyKey = selectedCurrencyKey ?? "21";

                const selectedPrice =
                  (product.prices as any)?.[safeCurrencyKey]?.price ?? " ";

                return (
                  <Card
                    id={product.uri ?? "default-id"}
                    key={product.uri ?? i}
                    productName={product.name ?? "default-name"}
                    image={
                      imagesFromProduct(product)[0] // TODO: Implement image carousel for products with multiple images?
                    }
                    price={selectedPrice}
                    liked={
                      wishlist?.includes(String(product.product) ?? "never") ??
                      false
                    }
                    onLike={() => {
                      setWishlist((wishlist) => {
                        if (typeof wishlist !== "string") wishlist = "";

                        const id = product.product;
                        if (typeof id !== "string") return wishlist;

                        const index = wishlist.indexOf(id);
                        const isFirst = index === 0;

                        if (index === -1) {
                          if (wishlist.length === 0) return id;
                          return [wishlist, id].join(",");
                        } else {
                          return (
                            wishlist.slice(0, index - (isFirst ? 0 : 1)) +
                            wishlist.slice(index + id.length)
                          );
                        }
                      });
                    }}
                    variantName={product.variantName ?? "default-variantName"}
                    availableSizes={product.items
                      ?.map((item) => item.name)
                      .filter(Boolean)}
                    variants={
                      product.pr_colors
                        ?.map((pr_colors) => pr_colors.name)
                        .filter(Boolean) ?? []
                    }
                    stockStatus={stockStatus}
                  />
                );
              }
            )}
          </CardGrid>
        </div>
      </div>
    </>
  );
}
