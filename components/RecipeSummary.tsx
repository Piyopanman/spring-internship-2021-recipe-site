import type { NextPage } from "next";
import Image from "next/image";
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
      <Image
        src={image_url}
        alt={props.title}
        width={300}
        height={200}
        layout="responsive"
      />
      <p>{props.description}</p>
      <br />
    </div>
  );
};

export default RecipeSummary;
