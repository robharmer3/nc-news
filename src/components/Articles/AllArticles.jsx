import { useState } from "react";
import ArticlesList from "./AllArticles-List";
import { getTopics } from "../../endpoint";
import Loading from "../Common/Loading";
import useFetchApi from "../Hooks/useFetchApi";

export default function Articles() {
  const [filter, setFilter] = useState("");

  const { isLoading, isError, data } = useFetchApi(getTopics);
  const { topics } = data;

  function handleFilter(event) {
    event.preventDefault();
    setFilter(event.target.value);
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <section className="All-Articles">
      <h3>Articles</h3>
      <form className="Articles-Filter">
        <label htmlFor="default">Filter by Topic: </label>
        <select onChange={handleFilter} name="article-filter" id="filter">
          <option key="all" value="">
            --Please Select--
          </option>
          {topics.map((topic) => {
            return (
              <option
                key={topic.slug}
                type="radio"
                name="article-filter"
                id={topic.slug}
                value={topic.slug}
              >
                {topic.slug}
              </option>
            );
          })}
        </select>
      </form>
      <ArticlesList filter={filter} />
    </section>
  );
}
