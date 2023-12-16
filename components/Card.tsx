import { ComponentPropsWithoutRef } from "react";

type CardProps = ComponentPropsWithoutRef<"div">;

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}
      {...props}>
      {children}
    </div>
  );
}
