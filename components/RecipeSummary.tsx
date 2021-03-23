import type { NextPage } from "next";
import type { Recipe } from "../pages";
import Link from "next/link";

const RecipeSummary: NextPage<Recipe> = (props) => {
  let image_url = props.image_url;
  if (props.image_url === null) {
    image_url = "/no_image.jpeg";
  }

  return (
    <div className="border-solid border-b-2">
      <h1 className="underline text-xl ">
        <Link href={`/recipe/${props.id}`}>{props.title}</Link>
      </h1>
      <img src={image_url} alt={props.title} />
      <p>{props.description}</p>
      <br />
    </div>
  );
};

export default RecipeSummary;
