import "@/styles/globals.css";
import { ByTiMoStoryless } from "@/components/ByTiMoStoryless";
import { useState } from "react";
import styles from "./app.module.css";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import { Logo } from "@/svgr";
import { useProducts } from "@/hooks/useProducts";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className={styles.headerContainer}>
        <Logo className={styles.logo} width={100} height={30} />
      </header>
      <main className={styles.main}>
        <Component {...pageProps} className={openSans.className} />
      </main>

      <ByTiMoStoryless />
    </>
  );
}
