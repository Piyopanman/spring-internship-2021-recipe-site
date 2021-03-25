import { NextPage, GetServerSideProps } from "next";
import Image from "next/image";
import loadable from "@loadable/component";
import type { Recipe } from "..";
import Layout from "../../components/Layout";
import RelatedRecipe from "../../components/RelatedRecipe";

const Ingredient = loadable(() => import("../../components/Ingredient"));
const Step = loadable(() => import("../../components/Step"));

type Props = {
  recipe: Recipe;
  relatedRecipes: RelatedRecipes;
};

type RelatedRecipes = {
  recipes: Recipe[];
};

const RecipePage: NextPage<Props> = (props) => {
  let date = format(new Date(props.recipe.published_at));

  return (
    <Layout
      title={`${props.recipe.title} | レシピ検索app`}
      description={`${props.recipe.description}`}
      image={`${props.recipe.image_url}`}
    >
      <div className="mx-auto w-5/6 mt-2">
        <h1 className="text-xl">{props.recipe.title}</h1>
        <Image
          priority={true}
          src={props.recipe.image_url}
          alt={props.recipe.title}
          width={896}
          height={504}
          layout="responsive"
        />
        <div className="flex flex-row my-1 mx-2 justify-between">
          <div>{props.recipe.author.user_name} </div>
          <div>{date}</div>
        </div>
        <p>{props.recipe.description}</p>
        <h2 className="bg-gray-400">材料</h2>
        {props.recipe.ingredients.map((i) => (
          <Ingredient key={i.name} name={i.name} quantity={i.quantity} />
        ))}
        <h2 className="bg-gray-400">手順</h2>
        {props.recipe.steps.map((step, index) => (
          <Step key={index} index={index + 1} step={step} />
        ))}
        <h2 className="bg-gray-400 mb-2">関連レシピ</h2>
        {/* <div className="flex flex-wrap content-start h-full"> */}
        {props.relatedRecipes.recipes.map((r) => (
          <RelatedRecipe key={r.id} id={r.id} img={r.image_url} />
        ))}
        {/* </div> */}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Number(context.params?.id);

  const res = await fetch(
    `https://internship-recipe-api.ckpd.co/recipes/${id}`,
    {
      headers: { "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY },
    }
  );
  const recipe = (await res.json()) as Recipe;

  //関連レシピ
  let relatedRecipesParam = "";
  recipe.related_recipes.forEach((r, index) => {
    if (index !== recipe.related_recipes.length - 1) {
      relatedRecipesParam += r + ",";
    } else {
      relatedRecipesParam += r;
    }
  });

  const resReleted = await fetch(
    `https://internship-recipe-api.ckpd.co/recipes?id=${relatedRecipesParam}`,
    {
      headers: { "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY },
    }
  );
  const relatedRecipes = (await resReleted.json()) as Recipe[];

  return {
    props: { recipe: recipe, relatedRecipes: relatedRecipes },
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
