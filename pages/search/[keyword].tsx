import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import type { Recipe } from "../index";

const Search: NextPage = (props) => {
  return <div>hoge</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const keyword = Number(context.params?.keyword);

  const res = await fetch(
    `https://internship-recipe-api.ckpd.co/search?keyword=${keyword}`,
    {
      headers: { "X-Api-Key": process.env.API_KEY },
    }
  );
  const props = (await res.json()) as Recipe;
  console.log(props);

  return {
    props: props,
  };
};

export default Search;
