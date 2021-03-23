import type { NextPage } from "next";
import { GetStaticProps, GetServerSideProps } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import Paging from "../components/Paging";
import RecipeSummary from "../components/RecipeSummary";

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
  return (
    <Layout>
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

export default TopPage;
