import { getArticles } from "../../endpoint";
import Error from "../Common/Error";
import Loading from "../Common/Loading";
import ArticleCard from "./AllArticles-Articles";
import useFetchApi from "../Hooks/useFetchApi";

export default function ArticlesList({ filter, page, age }) {
  const { isLoading, isError, data } = useFetchApi(
    getArticles,
    filter,
    page,
    age
  );
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
