import { getArticles } from "../../endpoint";
import Error from "../Common/Error";
import Loading from "../Common/Loading";
import ArticleCard from "./AllArticles-Articles";
import { useEffect, useState } from "react";

export default function ArticlesList({
  articles,
  setArticles,
  filter,
  page,
  age,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  useEffect(() => {
    setIsLoading(true);
    getArticles(filter, page, age)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error);
      });
  }, [filter, page, age]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <ul className="Article-List">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
}
