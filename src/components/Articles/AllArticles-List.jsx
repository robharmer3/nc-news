import { getArticles } from "../../endpoint";
import Error from "../Common/Error";
import Loading from "../Common/Loading";
import useFetchApi from "../Hooks/useFetchApi";
import ArticleCard from "./AllArticles-Articles";

export default function ArticlesList({ filter }) {
  const { isLoading, isError, data } = useFetchApi(getArticles, filter);
  const { articles } = data;

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
