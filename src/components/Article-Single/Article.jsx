import { useParams } from "react-router";
import { getSingleArticle } from "../../endpoint";
import useFetchApi from "../Hooks/useFetchApi";
import Loading from "../Common/Loading";
import Error from "../Common/Error";
import Comments from "./Comments";

export default function Article() {
  const { article_id } = useParams();

  const { isLoading, isError, data } = useFetchApi(
    getSingleArticle,
    article_id
  );
  const { article } = data;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error error={isError} />;
  }

  return (
    <>
      <h3 className="Article-Title">{article.title}</h3>
      <section className="Single-Article">
        <h5>Topic: {article.topic}</h5>
        <h5>Author: {article.author}</h5>
        <img src={article.article_img_url} alt={article.title} />
        <p>{article.body}</p>
        <p>Created At: {article.created_at}</p>
        <p>Votes: {article.votes}</p>
      </section>
      <Comments article_id={article_id} />
    </>
  );
}
