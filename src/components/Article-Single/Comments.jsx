import { getCommentByArticleId } from "../../endpoint";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";
import Error from "../Common/Error";
import Loading from "../Common/Loading";
import NewComment from "./NewComment";
import DeleteComment from "./Delete";
import VotesComments from "./Votes-Comments";

export default function Comments({ article_id }) {
  const { user } = useContext(UserContext);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [optimisticVotes, setOptimisticVotes] = useState(0);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  useEffect(() => {
    getCommentByArticleId(article_id)
      .then(({ comments }) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error);
        setIsLoading(false);
      });
  }, [isPosted, isDeleted]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <ul>
        <NewComment
          className="new-comment"
          article_id={article_id}
          setIsPosted={setIsPosted}
          comments={comments}
          setComments={setComments}
        />
        {isPosted ? (
          <h3 className="Article-New-Comments">Comment Posted</h3>
        ) : null}
        {isDeleted ? (
          <h3 className="Article-New-Comments">Comment Deleted</h3>
        ) : null}
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>By: {comment.author}</p>
              <p>Published: {comment.created_at}</p>
              <h4>{comment.votes + optimisticVotes} people Like this</h4>
              <VotesComments
                commentId={comment.comment_id}
                setOptimisticVotes={setOptimisticVotes}
              />
              {comment.author === user.username ? (
                <DeleteComment
                  commentId={comment.comment_id}
                  setIsDeleted={setIsDeleted}
                />
              ) : null}
            </li>
          );
        })}
      </ul>
    </>
  );
}
