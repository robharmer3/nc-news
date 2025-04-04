import { useContext, useState } from "react";
import { UserContext } from "../context/User";
import VotesComments from "./Votes-Comments";
import DeleteComment from "./Delete";

export default function CommentCard({ comment, setIsDeleted, setComments }) {
  const { user } = useContext(UserContext);
  const [optimisticVotes, setOptimisticVotes] = useState(0);

  return (
    <>
      <li>
        <p>{comment.body}</p>
        <p>By: {comment.author}</p>
        <p>Published: {Date(comment.created_at).toLocaleString()}</p>
        <h4>{comment.votes + optimisticVotes} people Like this</h4>
        <VotesComments
          commentId={comment.comment_id}
          setOptimisticVotes={setOptimisticVotes}
          voteName="Like +"
          vote={1}
        />
        <VotesComments
          commentId={comment.comment_id}
          setOptimisticVotes={setOptimisticVotes}
          voteName="Like -"
          vote={-1}
        />
        {comment.author === user.username ? (
          <DeleteComment
            commentId={comment.comment_id}
            setIsDeleted={setIsDeleted}
            setComments={setComments}
          />
        ) : null}
      </li>
    </>
  );
}
