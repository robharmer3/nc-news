import { getArticles } from "../../endpoint";
import Error from "../Common/Error";
import Loading from "../Common/Loading";
import ArticleCard from "./AllArticles-Articles";
import useFetchApi from "../Hooks/useFetchApi";

export default function ArticlesList({ filter, page }) {
  const { isLoading, isError, data } = useFetchApi(getArticles, filter, page);

  const { articles } = data;

  //Pass data from useFetchApi to articles (state) form AllArticles page.
  // articles, setArticles
  // console.log(data.articles);
  // setArticles((currArticles) => {
  //   console.log(currArticles, "<<<curr");
  //   return [...currArticles, data.articles];
  // });

  // console.log(articles, "<<<<articles post");

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
