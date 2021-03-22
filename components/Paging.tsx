import type { NextPage } from "next";
import Link from "next/link";

type Props = {
  prevLinkUrl: string;
  nextLinkUrl: string;
};

const Paging: NextPage<Props> = (props) => {
  let prevPage: string, nextPage: string;
  if (props.prevLinkUrl !== undefined) {
    const prev = new URL(props.prevLinkUrl);
    const prevParams = new URLSearchParams(prev.search);
    prevPage = prevParams.get("page");
    if (prevPage === null) {
      prevPage = "1";
    }
  }

  if (props.nextLinkUrl !== undefined) {
    const next = new URL(props.nextLinkUrl);
    const nextParams = new URLSearchParams(next.search);
    nextPage = nextParams.get("page");
  }

  return (
    <div>
      {props.prevLinkUrl !== undefined ? (
        <h2>
          <Link href={`/?page=${prevPage}`}>前のページ</Link>
        </h2>
      ) : (
        <h2> - </h2>
      )}
      {props.nextLinkUrl !== undefined ? (
        <h2>
          <Link href={`/?page=${nextPage}`}>次のページ</Link>
        </h2>
      ) : (
        <h2> - </h2>
      )}
    </div>
  );
};

export default Paging;
