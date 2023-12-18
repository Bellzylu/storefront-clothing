import { ComponentPropsWithoutRef } from "react";
import styles from "./CardGrid.module.css";

export type CardGridProps = ComponentPropsWithoutRef<"div">;

export function CardGrid({ children, className, ...props }: CardGridProps) {
  return (
    <div
      className={[className, styles.root].filter(Boolean).join(" ")}
      {...props}>
      {children}
    </div>
  );
}
