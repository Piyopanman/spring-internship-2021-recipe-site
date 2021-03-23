import { NextPage } from "next";

type Props = {
  name: string;
  quantity: string;
};

const Ingredient: NextPage<Props> = ({ name, quantity }) => {
  return (
    <div className="flex flex-row my-1 justify-between">
      <div> {name}</div>
      <div>{quantity}</div>
    </div>
  );
};

export default Ingredient;
