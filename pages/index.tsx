import type { NextPage, GetServerSideProps, GetStaticProps } from "next";
import { useState, useEffect } from "react";
import lodash from "lodash";
import loadable from "@loadable/component";
import Layout from "../components/Layout";

const Paging = loadable(() => import("../components/Paging"));
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
  // const [recipes, setRecipes] = useState<Recipe[]>(props.recipes);
  // const [pageNumber, setPageNumber] = useState<number>(1);

  // useEffect(() => {
  //   getRecipes();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [pageNumber]);

  // const handleScroll = lodash.throttle(() => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !==
  //     document.documentElement.offsetHeight
  //   ) {
  //     return;
  //   }
  //   setPageNumber(pageNumber + 1);
  // }, 200);

  // const getRecipes = async () => {
  //   if (pageNumber == 1) {
  //     return;
  //   }
  //   const page = String(pageNumber);
  //   const res = await fetch(
  //     `https://internship-recipe-api.ckpd.co/recipes?page=${page}`, //403になる
  //     {
  //       headers: { "X-Api-Key": process.env.API_KEY },
  //     }
  //   );
  //   const json = await res.json();
  //   var newRecipes = recipes.concat(json.contents);
  //   setRecipes(newRecipes);
  // };

  return (
    <Layout title="レシピ検索app" image={`${props.recipes[0].image_url}`}>
      <div className="mx-auto w-5/6">
        {props.recipes.map((r) => (
          <RecipeSummary key={r.id} {...r} />
        ))}
      </div>
      <Paging prevLinkUrl={props.links.prev} nextLinkUrl={props.links.next} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const page = context.query.page;
  let res: Response;
  if (page === undefined) {
    res = await fetch(`https://internship-recipe-api.ckpd.co/recipes`, {
      headers: { "X-Api-Key": process.env.API_KEY },
    });
  } else {
    res = await fetch(
      `https://internship-recipe-api.ckpd.co/recipes?page=${page}`,
      {
        headers: { "X-Api-Key": process.env.API_KEY },
      }
    );
  }
  const props = (await res.json()) as Props;

  return {
    props: props,
  };
};

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const res = await fetch("https://internship-recipe-api.ckpd.co/recipes", {
//     headers: { "X-Api-Key": process.env.API_KEY },
//   });
//   const props = (await res.json()) as Props;

//   return {
//     props: props,
//     revalidate: 600,
//   };
// };

export default TopPage;
