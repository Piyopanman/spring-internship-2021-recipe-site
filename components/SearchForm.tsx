import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, FormEvent } from "react";

const SearchForm: NextPage = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: { keyword: keyword },
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="keyword"
          type="text"
          autoComplete="hoge"
          onChange={(e) => setKeyword(e.target.value)}
          required
        />
        <button type="submit" disabled={!keyword}>
          検索
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
