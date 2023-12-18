import { ComponentPropsWithoutRef, forwardRef } from "react";
import styles from "./SearchBar.module.css";
import SvgHeart from "@/svgr/Heart";

export type SearchBarProps = {
  inputProps?: ComponentPropsWithoutRef<"input">;
  onHeart?: () => void;
  onSubmit?: (value: string) => void;
  filledHeart?: boolean;
} & Omit<ComponentPropsWithoutRef<"form">, "onSubmit">;

export const SearchBar = forwardRef<HTMLFormElement, SearchBarProps>(
  function SearchBar(
    {
      children,
      className,
      inputProps,
      onSubmit,
      onHeart,
      filledHeart = false,
      ...props
    },
    ref
  ) {
    return (
      <form
        ref={ref}
        className={[className, styles.root, ""].filter(Boolean).join(" ")}
        onSubmit={(e) => {
          e.preventDefault();
          const inputElement = e.currentTarget.querySelector("input");
          onSubmit?.(inputElement?.value ?? "");
        }}
        {...props}>
        <input
          type="search"
          className={styles.input}
          placeholder={filledHeart ? "Find favorites" : "Find products"}
          {...inputProps}>
          {children}
        </input>
        <button
          type="button"
          className={styles.heartButton}
          onClick={(e) => {
            e.preventDefault();
            onHeart?.();
          }}>
          <SvgHeart fill={filledHeart ? "#F3CECB" : "none"} />
        </button>
      </form>
    );
  }
);
