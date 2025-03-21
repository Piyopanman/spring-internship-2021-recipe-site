import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";

type Props = {
  id: number;
  img: string;
};

const RelatedRecipe: NextPage<Props> = (props) => {
  return (
    <>
      <Link href={`/recipe/${props.id}`}>
        <Image
          className="mb-2"
          src={props.img}
          alt={props.img}
          width={896}
          height={504}
        />
      </Link>
    </>
  );
};

export default RelatedRecipe;
