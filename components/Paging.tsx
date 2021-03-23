import type { NextPage } from "next";
import Link from "next/link";

type Props = {
  prevLinkUrl: string;
  nextLinkUrl: string;
  query?: string;
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

  if (props.query === undefined) {
    return (
      <div className="flex flex-row my-1 mx-5 justify-between">
        {props.prevLinkUrl !== undefined ? (
          <div className="underline">
            <Link href={`/?page=${prevPage}`}>前のページ</Link>
          </div>
        ) : (
          <div className="no-underline"> - </div>
        )}
        {props.nextLinkUrl !== undefined ? (
          <div className="underline">
            <Link href={`/?page=${nextPage}`}>次のページ</Link>
          </div>
        ) : (
          <div> - </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="flex flex-row my-1 mx-3 justify-between">
        {props.prevLinkUrl !== undefined ? (
          <div className="underline">
            <Link href={`/${props.query}&page=${prevPage}`}>前のページ</Link>
          </div>
        ) : (
          <div className="no-underline"> - </div>
        )}
        {props.nextLinkUrl !== undefined ? (
          <div className="underline">
            <Link href={`/${props.query}&page=${nextPage}`}>次のページ</Link>
          </div>
        ) : (
          <div> - </div>
        )}
      </div>
    );
  }
};

export default Paging;
