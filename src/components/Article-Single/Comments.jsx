import { useEffect, useState } from "react";
import NewComment from "./NewComment";
import CommentCard from "./CommentCard";
import { getCommentByArticleId } from "../../endpoint";
import Loading from "../Common/Loading";
import Error from "../Common/Error";

export default function Comments({ article_id }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState();

  useEffect(() => {
    setIsLoading(true);
    setIsPosted(false);
    setIsDeleted(false);
    getCommentByArticleId(article_id)
      .then(({ comments }) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error);
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
        {!isLoading &&
          comments.map((comment) => {
            return (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                setIsDeleted={setIsDeleted}
                setComments={setComments}
              />
            );
          })}
      </ul>
    </>
  );
}
