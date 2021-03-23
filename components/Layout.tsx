import React, { ReactNode } from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import SearchForm from "./SearchForm";
import Link from "next/link";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  image?: string;
};

const Layout = ({
  children,
  title = "レシピ検索app",
  description = "レシピを検索できます！",
  image = "http://img.cpcdn.com/recipes/317016/1280x720c/2c3d2dfb0ad90b38b791cca584edc87a.jpg",
}: Props) => (
  <div className={styles.container}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="クックパッド" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@hiyoko_coder" />
      <meta property="og:url" content="https://cookpad.com/" />
      <meta property="og:title" content="クックパッド" />
      <meta property="og:description" content={`${description}`} />
      <meta property="og:image" content={`${image}`} />
    </Head>
    <h1 className="text-center text-3xl m-2 underline bg-gray-400">
      <Link href="/"> レシピ検索app</Link>
    </h1>
    <SearchForm />
    {children}
  </div>
);

export default Layout;
