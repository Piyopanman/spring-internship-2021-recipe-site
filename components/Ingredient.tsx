import { NextPage } from "next";

type Props = {
  name: string;
  quantity: string;
};

const Ingredient: NextPage<Props> = ({ name, quantity }) => {
  return (
    <div>
      <p>
        {name}:{quantity}
      </p>
    </div>
  );
};

export default Ingredient;
