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
    <div className="border-solid border-b-2 bg-white m-1 p-2">
      <h1 className="underline text-xl text-green-700">
        <Link href={`/recipe/${props.id}`}>{props.title}</Link>
      </h1>
      <Link href={`/recipe/${props.id}`}>
        <Image
          priority={true}
          src={image_url}
          alt={props.title}
          width={896}
          height={504}
          layout="responsive"
        />
      </Link>
      <p className="">{props.description}</p>
    </div>
  );
};

export default RecipeSummary;
