import { useEffect, useState } from "react";
import ArticlesList from "./AllArticles-List";
import { getTopics } from "../../endpoint";
import Loading from "../Common/Loading";
import useFetchApi from "../Hooks/useFetchApi";
import FilterByTopics from "./Filter-Topic";
import SortByCreated from "./Sort-Created";
import { useNavigate } from "react-router";

export default function Articles() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("");
  const [age, setAge] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTopics()
      .then(({ topics }) => {
        setTopics(topics);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error);
        setIsLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  function handlePageChange() {
    setPage((currentPage) => currentPage + 1);
    navigate(`/articles?page=${page}`);
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <section className="All-Articles">
      <h2>All Articles</h2>
      <FilterByTopics topics={topics} setFilter={setFilter} setPage={setPage} />
      <SortByCreated setAge={setAge} />
      <ArticlesList
        filter={filter}
        age={age}
        page={page}
        setPage={setPage}
        articles={articles}
        setArticles={setArticles}
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
