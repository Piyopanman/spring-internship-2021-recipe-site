import type { NextPage } from "next";
import Link from "next/link";

type Props = {
  prevLinkUrl: string;
  nextLinkUrl: string;
};

const Paging: NextPage<Props> = (props) => {
  return (
    <div>
      {props.prevLinkUrl !== undefined ? (
        <h2>
          <Link href="">前のページ</Link>
        </h2>
      ) : (
        <h2>前のページなし</h2>
      )}
      {props.nextLinkUrl !== undefined ? (
        <h2>
          <Link href="">次のページ</Link>
        </h2>
      ) : (
        <h2>次のページなし</h2>
      )}
    </div>
  );
};

export default Paging;
