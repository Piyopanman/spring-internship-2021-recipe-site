import type { NextPage, GetServerSideProps } from "next";
import loadable from "@loadable/component";
import Layout from "../../components/Layout";
import type { Props } from "../index";

const Paging = loadable(() => import("../../components/Paging"));
const RecipeSummary = loadable(() => import("../../components/RecipeSummary"));

interface SearchProps extends Props {
  keyword: string;
}

const Search: NextPage<SearchProps> = (props) => {
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
        {props.recipes.map((r) => (
          <RecipeSummary key={r.id} {...r} />
        ))}
        <Paging
          prevLinkUrl={props.links.prev}
          nextLinkUrl={props.links.next}
          query={`search?keyword=${props.keyword}`}
        />
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
  let res: Response;
  if (page === undefined) {
    res = await fetch(
      `https://internship-recipe-api.ckpd.co/search?keyword=${encoded}&page=1`,
      {
        headers: { "X-Api-Key": process.env.API_KEY },
      }
    );
  } else {
    res = await fetch(
      `https://internship-recipe-api.ckpd.co/search?keyword=${encoded}&page=${page}`,
      {
        headers: { "X-Api-Key": process.env.API_KEY },
      }
    );
  }
  const props = (await res.json()) as SearchProps;

  props.keyword = keyword;
  return {
    props: props,
  };
};

export default Search;
