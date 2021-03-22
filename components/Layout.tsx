import React, { ReactNode } from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import SearchForm from "./SearchFOrm";

type Props = {
  children?: ReactNode;
  title?: string;
  twitter?: string;
};

const Layout = ({
  children,
  title = "default title",
  twitter = "default twitter description",
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
      <meta property="og:description" content={`${twitter}`} />
      <meta property="og:image" content="" />
    </Head>
    <h1>レシピ検索app</h1>
    <SearchForm />
    {children}
  </div>
);

export default Layout;
