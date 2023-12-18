import { type ComponentPropsWithoutRef, useState } from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import { Heart } from "@/svgr";

export type CardProps = {
  id: string;
  productName: string;
  variantName: string;
  availableSizes?: string[];
  variants: string[];
  image?: string;
  fallbackImage?: string;
  price: string | number;
  liked?: boolean;
  optional?: string;
  onLike?: (prev: boolean) => void;
  stockStatus?: string;
} & ComponentPropsWithoutRef<"div">;

export function Card({
  variantName,
  availableSizes = [],
  variants,
  children,
  className,
  productName,
  image,
  fallbackImage = "https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792_1280.jpg",
  price,
  liked = false,
  onLike,
  stockStatus,
  ...props
}: CardProps) {
  const [src, setSrc] = useState(image);

  return (
    <div
      className={[className, styles.root, ""].filter(Boolean).join(" ")}
      {...props}>
      <div className={styles.image}>
        <Image
          alt={productName}
          src={src ?? fallbackImage}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width:768px) 100vw, 33vw"
          onError={() => setSrc(fallbackImage)}
        />
        <button
          className={styles.heartButton}
          onClick={() => {
            onLike?.(liked);
          }}>
          <Heart
            fill={liked ? "pink" : "none"}
            width="1.25rem"
            height="1.25rem"
          />
        </button>
        {stockStatus ? (
          <span className={styles.stockStatus}>{stockStatus}</span>
        ) : null}
      </div>
      <div className={styles.details}>
        <div className={styles.variants}>{variants.join(" | ")}</div>
        <div className={styles.productName}>{productName}</div>
        <div className={styles.variantName}> {variantName}</div>
        <div className={styles.price}>{price}</div>
        <div className={styles.availableSizes}>
          {availableSizes?.join(", ")}
        </div>
      </div>
      {children}
    </div>
  );
}
