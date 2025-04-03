import { useEffect, useState } from "react";
import { getArticles } from "../../endpoint";
import Error from "../Common/Error";
import Loading from "../Common/Loading";
import ArticleCard from "./AllArticles-Articles";

export default function ArticlesList({
  filter,
  age,
  page,
  articles,
  setArticles,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  useEffect(() => {
    getArticles(filter, page, age)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error);
        setIsLoading(false);
      });
  }, [filter, page, age]);

  // const { isLoading, isError, data } = useFetchApi(getArticles, filter, page);
  // const { articles } = data;

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
