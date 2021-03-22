import type { NextPage } from "next";
import type { Recipe } from "../pages/index";
import Link from "next/link";

const RecipeSummary: NextPage<Recipe> = (props) => {
  return (
    <div>
      <h1>
        <Link href={`/recipe/${props.id}`}>{props.title}</Link>
      </h1>
      <img src={props.image_url} alt={props.title} />
      <p>{props.description}</p>
      <br />
    </div>
  );
};

export default RecipeSummary;
