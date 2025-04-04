import { useState } from "react";
import { getTopics } from "../../endpoint";
import ArticlesList from "./AllArticles-List";
import Loading from "../Common/Loading";
import useFetchApi from "../Hooks/useFetchApi";
import FilterByTopics from "./Filter-Topic";
import Error from "../Common/Error";
import SortByCreated from "./Sort-Created";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [age, setAge] = useState("");

  const { isLoading, isError, data } = useFetchApi(getTopics);
  const { topics } = data;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <section className="All-Articles">
      <h2>All Articles</h2>
      <FilterByTopics topics={topics} setFilter={setFilter} />
      <SortByCreated setAge={setAge} />
      <ArticlesList
        articles={articles}
        setArticles={setArticles}
        filter={filter}
        age={age}
        page={page}
        setPage={setPage}
      />
      <button
        onClick={() => setPage((currentPage) => currentPage - 1)}
        disabled={page === 1}
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          setPage((currentPage) => currentPage + 1);
        }}
        disabled={articles.length < 10}
      >
        Next Page
      </button>
    </section>
  );
}
