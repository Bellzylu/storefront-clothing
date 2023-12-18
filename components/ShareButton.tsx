import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import styles from "./ShareButton.module.css";

export type ShareButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "children"
>;

export function ShareButton({ className, ...props }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  }

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <button
      className={[className, styles.root].filter(Boolean).join(" ")}
      onClick={() => void copyToClipboard()}
      {...props}>
      {copied ? "Copied!" : "Share"}
    </button>
  );
}
