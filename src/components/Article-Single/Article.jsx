import { useParams } from "react-router";
import { getSingleArticle } from "../../endpoint";
import { useState } from "react";
import useFetchApi from "../Hooks/useFetchApi";
import Loading from "../Common/Loading";
import Error from "../Common/Error";
import Comments from "./Comments";
import ArticleCard from "./ArticleCard";

export default function Article() {
  console.log("render");

  const { article_id } = useParams();
  const [optimisticVotes, setOptimisticVotes] = useState(0);

  const { isError, isLoading, data } = useFetchApi(
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
      <h2 className="Article-Title">{article.title}</h2>
      <ArticleCard
        article={article}
        optimisticVotes={optimisticVotes}
        setOptimisticVotes={setOptimisticVotes}
      />
      <section className="Article-Comments">
        <h4 id="Comment-Title">Comments:</h4>
        <Comments article_id={article_id} />
      </section>
    </>
  );
}
