import { useEffect, useState } from "react";
import ArticlesList from "./AllArticles-List";
import { getTopics } from "../../endpoint";

export default function Articles() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getTopics()
      .then(({ topics }) => {
        setTopics(topics);
      })
      .then(setIsLoading(false));
  }, []);

  function handleFilter(event) {
    event.preventDefault();
    setFilter(event.target.value);
  }

  if (isLoading) {
    return <p>Loading...</p>;
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
