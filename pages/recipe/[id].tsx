import { NextPage, GetServerSideProps } from "next";
import Image from "next/image";
import loadable from "@loadable/component";
import type { Recipe } from "..";
import Layout from "../../components/Layout";

const Ingredient = loadable(() => import("../../components/Ingredient"));
const Step = loadable(() => import("../../components/Step"));

const RecipePage: NextPage<Recipe> = (props) => {
  let date = format(new Date(props.published_at));

  return (
    <Layout
      title={`${props.title} | レシピ検索app`}
      description={`${props.description}`}
      image={`${props.image_url}`}
    >
      <div className="mx-auto w-5/6 mt-2">
        <h1 className="text-xl">{props.title}</h1>
        <Image src={props.image_url} alt="image" width={300} height={200} />
        <div className="flex flex-row my-1 mx-3 justify-between">
          <div>{props.author.user_name} </div>
          <div>{date}</div>
        </div>
        <p>{props.description}</p>
        <h2 className="bg-gray-400">材料</h2>
        {props.ingredients.map((i) => (
          <Ingredient key={i.name} name={i.name} quantity={i.quantity} />
        ))}
        <h2 className="bg-gray-400">手順</h2>
        {props.steps.map((step, index) => (
          <Step key={index} index={index + 1} step={step} />
        ))}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Recipe> = async (
  context
) => {
  const id = Number(context.params?.id);

  const res = await fetch(
    `https://internship-recipe-api.ckpd.co/recipes/${id}`,
    {
      headers: { "X-Api-Key": process.env.API_KEY },
    }
  );
  const props = (await res.json()) as Recipe;
  return {
    props: props,
  };
};

const format = (dateTime: Date) => {
  const year = dateTime.getFullYear();
  const month = 1 + dateTime.getMonth();
  const month2 = month < 10 ? "0" + month : month;
  const date = dateTime.getDate();
  const date2 = date < 10 ? "0" + date : date;
  const hour = dateTime.getHours();

  return `${year}/${month2}/${date2}`;
};

export default RecipePage;
