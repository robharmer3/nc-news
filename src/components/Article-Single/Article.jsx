import { useParams } from "react-router";
import { getSingleArticle } from "../../endpoint";
import { useEffect, useState } from "react";
import Loading from "../Common/Loading";
import Error from "../Common/Error";
import Comments from "./Comments";
import Votes from "./Votes";

export default function Article() {
  console.log("render");
  const { article_id } = useParams();
  const [optimisticVotes, setOptimisticVotes] = useState(0);

  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  useEffect(() => {
    getSingleArticle(article_id)
      .then(({ article }) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error error={isError} />;
  }

  return (
    <>
      <h2 className="Article-Title">{article.title}</h2>
      <section className="Single-Article">
        <img src={article.article_img_url} alt={article.title} />
        <h3>Topic: {article.topic}</h3>
        <p>{article.body}</p>
        <p>By {article.author}</p>
        <p>Published: {article.created_at}</p>
        <h4>{article.votes + optimisticVotes} people Like this</h4>
        <Votes article={article} setOptimisticVotes={setOptimisticVotes} />
      </section>
      <section className="Article-Comments">
        <h4 id="Comment-Title">Comments:</h4>
        <Comments article_id={article_id} />
      </section>
    </>
  );
}
