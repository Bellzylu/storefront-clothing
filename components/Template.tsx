import { ComponentPropsWithoutRef } from "react";
import styles from "./Template.module.css";

export type TemplateProps = {
  // Props here
} & ComponentPropsWithoutRef<"div">;

export function Template({ children, className, ...props }: TemplateProps) {
  return (
    <div
      className={[
        className, // External classes passed to the component
        styles.root, // Module styles here
        "", // Add global classes here
      ]
        .filter(Boolean) // Remove empty strings
        .join(" ")}
      {...props}>
      {children}
    </div>
  );
}
