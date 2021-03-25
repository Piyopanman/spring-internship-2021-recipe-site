import type { NextPage, GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import loadable from "@loadable/component";
import Layout from "../../components/Layout";
import { Props } from "../index";
import type { Recipe } from "../index";
import InfiniteScroll from "react-infinite-scroller";

const RecipeSummary = loadable(() => import("../../components/RecipeSummary"));

interface SearchProps extends Props {
  keyword: string;
}

const Search: NextPage<SearchProps> = (props) => {
  const [recipes, setRecipes] = useState<Recipe[]>(props.recipes);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async (page: number) => {
    const res = await fetch(
      `https://internship-recipe-api.ckpd.co/search?keyword=${
        props.keyword
      }&page=${page + 1}`,
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
    <div className="text-2xl text-center m-2 text-yellow-900" key={0}>
      Loading ...
    </div>
  );

  return (
    <div className="bg-yellow-100">
      <Layout
        title={`${props.keyword}を使ったレシピ一覧 | レシピ検索app`}
        description={`${props.recipes[0].description}`}
        image={`${props.recipes[0].image_url}`}
      >
        <div className="mx-auto w-5/6">
          <h1 className="text-center text-2xl m-2 bg-yellow-600 text-white rounded">
            {props.keyword}を使ったレシピ
          </h1>
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
