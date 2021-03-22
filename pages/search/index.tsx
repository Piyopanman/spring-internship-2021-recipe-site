import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import Paging from "../../components/Paging";
import RecipeSummary from "../../components/RecipeSummary";
import type { Recipe } from "../index";
import type { Props } from "../index";

interface SearchProps extends Props {
  keyword: string;
}

const Search: NextPage<SearchProps> = (props) => {
  return (
    <Layout>
      <div>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const keyword = String(context.query.keyword);
  const encoded = encodeURI(keyword);
  const page = context.query.page;
  console.log(keyword);
  console.log(page);
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

  console.log(props);

  return {
    props: props,
  };
};

export default Search;
