import { NextPage } from "next";

type Props = {
  index: number;
  step: string;
};

const Step: NextPage<Props> = ({ index, step }) => {
  return (
    <div>
      <p>
        {index}. {step}
      </p>
    </div>
  );
};

export default Step;
