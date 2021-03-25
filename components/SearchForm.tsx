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
    <div className="text-center mb-6">
      <label htmlFor="search-word">
        <form onSubmit={handleSubmit}>
          <input
            className="p-1 border-solid border border-yellow rounded-sm"
            name="keyword"
            type="text"
            autoComplete="hoge"
            onChange={(e) => setKeyword(e.target.value)}
            id="search-word"
            placeholder="鶏肉"
            required
          />
          <button
            className="p-1 border-solid border bg-yellow-600 text-white rounded-sm"
            type="submit"
            disabled={!keyword}
          >
            検索
          </button>
        </form>
      </label>
    </div>
  );
};

export default SearchForm;
