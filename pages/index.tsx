import type { NextPage, GetStaticProps } from "next";
import { useState, useEffect } from "react";
import loadable from "@loadable/component";
import Layout from "../components/Layout";
import type Recipe from "./index";
import type Props from "./index";
import lodash from "lodash";

const RecipeSummary = loadable(() => import("../components/RecipeSummary"));

export type Recipe = {
  id: number;
  title: string;
  description: string;
  image_url: string | null;
  author: {
    user_name: string;
  };
  published_at: string;
  steps: string[];
  ingredients: {
    name: string;
    quantity: string;
  }[];
  related_recipes: number[];
};

export interface Props {
  recipes: Recipe[];
  links: { next?: string; prev?: string };
}

const TopPage: NextPage<Props> = (props) => {
  const [recipes, setRecipes] = useState<Recipe[]>(props.recipes);
  const [number, setNumber] = useState<number>(1);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    getRecipes();
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
      `https://internship-recipe-api.ckpd.co/recipes?page=${number}`,
      {
        headers: { "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY },
      }
    );

    const data = (await res.json()) as Props;
    const newRecipes = data.recipes as Recipe[];
    setRecipes([...recipes, ...newRecipes]);
  };

  return (
    <div>
      <Layout
        title="レシピ検索app"
        image={`${props.recipes[0].image_url}`}
        preload={`${props.recipes[0].image_url}`}
      >
        <div className="mx-auto w-5/6">
          {recipes.map((r) => (
            <RecipeSummary key={r.id} {...r} />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch("https://internship-recipe-api.ckpd.co/recipes", {
    headers: { "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY },
  });
  const props = (await res.json()) as Props;

  return {
    props: props,
    revalidate: 600,
  };
};

export default TopPage;
