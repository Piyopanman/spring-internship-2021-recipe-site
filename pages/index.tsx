import type { NextPage } from "next";
import { GetStaticProps, GetServerSideProps } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import Paging from "../components/Paging";
import RecipeSummary from "../components/RecipeSummary";

export type Recipe = {
  // レシピID
  id: number;
  // レシピ名
  title: string;
  // レシピ概要
  description: string;
  // レシピ画像。画像がない場合は null。
  image_url: string | null;
  // レシピ作者
  author: {
    user_name: string;
  };
  // レシピを公開した日時。ISO 8601
  published_at: string;
  // レシピの手順
  steps: string[];
  // レシピの材料
  ingredients: {
    // 材料名
    name: string;
    // 分量（100g など）
    quantity: string;
  }[];
  // 関連するレシピのIDが最大5つ入っている。Poster View などを実装するのに使う。
  related_recipes: number[];
};

export interface Props {
  recipes: Recipe[];
  links: { next?: string; prev?: string };
}

type QueryParameter = {
  // ページネーションする場合に指定するページ番号。
  page?: number;
  // レシピIDをカンマで区切って複数指定でる。指定できるIDの数の上限は10。
  // idを指定した場合はページネーションはできないのでidとpageは同時に指定できない。
  id?: string;
};

const TopPage: NextPage<Props> = (props) => {
  return (
    <Layout>
      <div>
        <h1>トップページ</h1>
        <div>
          {props.recipes.map((r) => (
            <RecipeSummary key={r.id} {...r} />
          ))}
        </div>
        <Paging prevLinkUrl={props.links.prev} nextLinkUrl={props.links.next} />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const page = context.query.page;
  // console.log(page);
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
  // console.log(props.links);

  return {
    props: props,
  };
};

export default TopPage;
