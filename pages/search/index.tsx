import type { NextPage, GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import loadable from "@loadable/component";
import Layout from "../../components/Layout";
import { Props } from "../index";
import type { Recipe } from "../index";
import lodash from "lodash";

const RecipeSummary = loadable(() => import("../../components/RecipeSummary"));

interface SearchProps extends Props {
  keyword: string;
}

const Search: NextPage<SearchProps> = (props) => {
  const [recipes, setRecipes] = useState<Recipe[]>(props.recipes);
  const [number, setNumber] = useState<number>(1);

  useEffect(() => {
    getRecipes();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [number]);

  // 一番下に到達したらページ番号を更新
  const handleScroll = lodash.throttle(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    setNumber(number + 1);
  }, 200);

  // 続きを取得して配列に結合
  const getRecipes = async () => {
    if (number == 1) {
      return;
    }
    const res = await fetch(
      `https://internship-recipe-api.ckpd.co/search?keyword=${props.keyword}&page=${number}`,
      {
        headers: { "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY },
      }
    );
    const data = (await res.json()) as Props;
    const newRecipes = data.recipes as Recipe[];
    setRecipes([...recipes, ...newRecipes]);
  };

  return (
    <Layout
      title={`${props.keyword}を使ったレシピ一覧 | レシピ検索app`}
      description={`${props.recipes[0].description}`}
      image={`${props.recipes[0].image_url}`}
    >
      <div className="mx-auto w-5/6">
        <h1 className="text-center text-2xl m-2">
          {props.keyword}を使ったレシピ
        </h1>
        {recipes.map((r) => (
          <RecipeSummary key={r.id} {...r} />
        ))}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const keyword = String(context.query.keyword);
  const encoded = encodeURI(keyword);
  const page = context.query.page;
  let res = await fetch(
    `https://internship-recipe-api.ckpd.co/search?keyword=${encoded}&page=1`,
    {
      headers: { "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY },
    }
  );
  const props = (await res.json()) as SearchProps;

  props.keyword = keyword;
  return {
    props: props,
  };
};

export default Search;
