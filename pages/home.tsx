import type { NextPage, GetServerSideProps, GetStaticProps } from "next";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import loadable from "@loadable/component";
import Layout from "../components/Layout";
import type Recipe from "./index";
import type Props from "./index";

const Paging = loadable(() => import("../components/Paging"));
const RecipeSummary = loadable(() => import("../components/RecipeSummary"));
let apiKey: string;

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
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadMore = async (page: number) => {
    const res = await fetch(
      `https://internship-recipe-api.ckpd.co/recipes?page=${page}`, //403
      //   `https://internship-recipe-api.ckpd.co/recipes`, //403
      {
        headers: { "X-Api-Key": process.env.API_KEY },
      }
    );
    const data = (await res.json()) as Props;
    const newRecipes = data.recipes as Recipe[];
    console.log(newRecipes);

    if (newRecipes.length < 1) {
      setHasMore(false);
      return;
    }
    setRecipes([...recipes, ...newRecipes]);
  };

  const items = (
    <div className="mx-auto w-5/6">
      {recipes.map((r) => (
        <RecipeSummary {...r} />
      ))}
    </div>
  );

  const loader = <div key={0}>Loading ...</div>;

  return (
    <div>
      <Layout title="レシピ検索app" image={`${props.recipes[0].image_url}`}>
        <InfiniteScroll
          pageStart={1}
          loadMore={loadMore}
          hasMore={true}
          loader={loader}
        >
          {items}
        </InfiniteScroll>
        <Paging prevLinkUrl={props.links.prev} nextLinkUrl={props.links.next} />
      </Layout>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps<Props> = async (
//   context
// ) => {
//   const page = context.query.page;
//   let res: Response;
//   if (page === undefined) {
//     res = await fetch(`https://internship-recipe-api.ckpd.co/recipes`, {
//       headers: { "X-Api-Key": process.env.API_KEY },
//     });
//   } else {
//     res = await fetch(
//       `https://internship-recipe-api.ckpd.co/recipes?page=${page}`,
//       {
//         headers: { "X-Api-Key": process.env.API_KEY },
//       }
//     );
//   }
//   const props = (await res.json()) as Props;

//   return {
//     props: props,
//   };
// };

export const getStaticProps: GetStaticProps<Props> = async () => {
  apiKey = process.env.API_KEY;
  const res = await fetch("https://internship-recipe-api.ckpd.co/recipes", {
    headers: { "X-Api-Key": process.env.API_KEY },
  });
  const props = (await res.json()) as Props;

  return {
    props: props,
    revalidate: 600,
  };
};

export default TopPage;
