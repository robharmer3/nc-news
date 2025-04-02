import { getCommentByArticleId } from "../../endpoint";
import { useContext, useState } from "react";
import { UserContext } from "../context/User";
import Error from "../Common/Error";
import Loading from "../Common/Loading";
import NewComment from "./NewComment";
import Posted from "./Posted";
import useFetchApi from "../Hooks/useFetchApi";
import DeleteComment from "./Delete";

export default function Comments({ article_id }) {
  const { user } = useContext(UserContext);
  const [isDeleted, setIsDeleted] = useState(false);
  const [optimisticComment, setOptimisticComment] = useState({
    body: "",
    author: user.username,
    created_at: "Now",
    votes: 0,
  });

  const [newComment, setNewComment] = useState({
    username: "grumpy19",
    body: "",
  });

  const [isPosted, setIsPosted] = useState(false);

  const { isLoading, isError, data } = useFetchApi(
    getCommentByArticleId,
    article_id,
    isDeleted
  );
  const { comments } = data;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <NewComment
        className="new-comment"
        article_id={article_id}
        newComment={newComment}
        setNewComment={setNewComment}
        setIsPosted={setIsPosted}
        setOptimisticComments={setOptimisticComment}
      />
      {isPosted ? (
        <Posted
          optimisticComment={optimisticComment}
          setOptimisticComments={setOptimisticComment}
        />
      ) : null}
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>Comment: {comment.body}</p>
              <p>Author: {comment.author}</p>
              <p>Created At: {comment.created_at}</p>
              <p>Votes: {comment.votes}</p>
              {comment.author === user.username ? (
                <DeleteComment
                  commentId={comment.comment_id}
                  setIsDeleted={setIsDeleted}
                />
              ) : null}
              {isDeleted ? <p>Comment Deleted</p> : null}
            </li>
          );
        })}
      </ul>
    </>
  );
}
