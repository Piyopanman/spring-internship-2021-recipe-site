import type { NextPage, GetStaticProps } from "next";
import { useState } from "react";
import loadable from "@loadable/component";
import Layout from "../components/Layout";
import type Recipe from "./index";
import type Props from "./index";
import InfiniteScroll from "react-infinite-scroller";

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
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async (page: number) => {
    const res = await fetch(
      `https://internship-recipe-api.ckpd.co/recipes?page=${page + 1}`,
      {
        headers: { "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY },
      }
    );
    const data = (await res.json()) as Props;
    const newRecipes = data.recipes as Recipe[];
    if (newRecipes.length < 1) {
      setHasMore(false);
      return;
    }
    setRecipes([...recipes, ...newRecipes]);
  };

  const items = (
    <div>
      {recipes.map((r) => (
        <RecipeSummary key={r.id} {...r} />
      ))}
    </div>
  );

  const loader = (
    <div className="text-2xl text-center m-2 text-yellow-500" key={0}>
      Loading ...
    </div>
  );

  return (
    <div className="bg-yellow-100">
      <Layout
        title="レシピ検索app"
        image={`${props.recipes[0].image_url}`}
        preload={`${props.recipes[0].image_url}`}
      >
        <div className="mx-auto w-5/6 ">
          <InfiniteScroll
            loadMore={loadMore}
            hasMore={hasMore}
            loader={loader}
            initialLoad={false}
          >
            {items}
          </InfiniteScroll>
        </div>
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(
    "https://internship-recipe-api.ckpd.co/recipes?page=1",
    {
      headers: { "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY },
    }
  );
  const props = (await res.json()) as Props;

  return {
    props: props,
    revalidate: 600,
  };
};

export default TopPage;
