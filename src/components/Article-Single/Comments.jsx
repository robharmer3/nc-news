import { getCommentByArticleId } from "../../endpoint";
import Error from "../Common/Error";
import Loading from "../Common/Loading";
import useFetchApi from "../Hooks/useFetchApi";

export default function Comments({ article_id }) {
  const { isLoading, isError, data } = useFetchApi(
    getCommentByArticleId,
    article_id
  );
  const { comments } = data;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <section className="Article-Comments">
      <h4 id="Comment-Title">Comments:</h4>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>Comment: {comment.body}</p>
              <p>Author: {comment.author}</p>
              <p>Created At: {comment.created_at}</p>
              <p>Votes: {comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
