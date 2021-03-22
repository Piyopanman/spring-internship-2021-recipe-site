import Layout from "../../components/Layout";
import { GetServerSideProps } from "next";
import { NextPage } from "next";
import type { Recipe } from "../index";
import Ingredient from "../../components/Ingredient";
import Step from "../../components/Step";

const RecipePage: NextPage<Recipe> = (props) => {
  return (
    <Layout>
      <div>
        <img src={props.image_url} alt="image" />
        <h1>{props.title}</h1>
        <p>
          {props.author.user_name} {props.published_at}
        </p>
        <p>{props.description}</p>
        <h2>材料</h2>
        {props.ingredients.map((i) => (
          <Ingredient key={i.name} name={i.name} quantity={i.quantity} />
        ))}
        <h2>手順</h2>
        {props.steps.map((step, index) => (
          <Step key={index} index={index + 1} step={step} />
        ))}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
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

export default RecipePage;
