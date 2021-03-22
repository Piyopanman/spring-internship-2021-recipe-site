import Layout from "../../components/Layout";
import { GetServerSideProps } from "next";
import { NextPage } from "next";
import type { Recipe } from "../index";

const RecipePage: NextPage<Recipe> = (props) => {
  //console.log(props);

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
          <p>
            {i.name} : {i.quantity}
          </p>
        ))}
        <h2>手順</h2>
        {props.steps.map((step, index) => (
          <p>
            {index}. {step}
          </p>
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
