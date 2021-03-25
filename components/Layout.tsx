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
  preload?: string;
};

const Layout = ({
  children,
  title = "レシピ検索app",
  description = "レシピを検索できます！",
  image = "http://img.cpcdn.com/recipes/317016/1280x720c/2c3d2dfb0ad90b38b791cca584edc87a.jpg",
  preload = "/favicon.ico",
}: Props) => (
  <div className={styles.container}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={`${description}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:url"
        content="https://kakizaki-spring-internship-2021-recipe-site.vercel.app/"
      />
      <meta property="og:title" content={`${title}`} />
      <meta property="og:description" content={`${description}`} />
      <meta property="og:image" content={`${image}`} />
      <meta name="msapplication-square150x150logo" content="/favicon.png" />
      <meta name="msapplication-TileColor" content="#ffa500" />
      <meta name="theme-color" content="#fff" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      <link rel="apple-touch-startup-image" href="/favicon.ico" />
      <link rel="preload" as="image" href={`${preload}`} />
    </Head>
    <h1 className="text-center text-3xl m-2 underline bg-gray-400">
      <Link href="/"> レシピ検索app</Link>
    </h1>
    <SearchForm />
    {children}
  </div>
);

export default Layout;
