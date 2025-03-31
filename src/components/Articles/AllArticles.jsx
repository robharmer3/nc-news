import { useEffect, useState } from "react";
import ArticlesList from "./AllArticles-List";
import { getTopics } from "../../endpoint";

export default function Articles() {
  const [topics, setTopics] = useState([]);
  //   const [filter, setFilter] = useState("");

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  //   function handleFilter(event) {
  //     event.preventDefault();
  //     console.log(event.target);
  //     // setFilter(event.target.value);
  //   }

  return (
    <section className="All-Articles">
      <h3>Articles</h3>
      {/* <form className="Articles-Filter" onChange={handleFilter}>
        <input type="radio" name="article-filter" id="default" />
        <label htmlFor="default"> All Topics</label>
        {topics.map((topic) => {
          return (
            <div key={topic.slug}>
              <input
                type="radio"
                name="article-filter"
                id={topic.slug}
                value={topic.slug}
              />
              <label htmlFor={topic.slug}> {topic.slug}</label>
            </div>
          );
        })}
      </form> */}
      <ArticlesList />
    </section>
  );
}
