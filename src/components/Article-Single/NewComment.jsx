import { useContext, useState } from "react";
import { postCommentByArticleId } from "../../endpoint";
import { UserContext } from "../context/User";

export default function NewComment({ article_id, setIsPosted, setComments }) {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [newCommentId, setNewCommentId] = useState("");

  function handleInput(event) {
    setNewComment(event.target.value);
  }

  function handleNewComment(event) {
    event.preventDefault();
    postCommentByArticleId(article_id, {
      username: user.username,
      body: newComment,
    })
      .then(({ comment }) => {
        setNewCommentId(comment.comment_id);
      })
      .then(() => {
        setIsPosted(true);
        setComments((currComments) => {
          return [
            ...currComments,
            {
              author: user.username,
              body: newComment,
              votes: 0,
              article_id: article_id,
              comment_id: newCommentId,
            },
          ];
        });
      });
  }

  return (
    <form className="new-comment" onSubmit={handleNewComment}>
      <label htmlFor="comment">Comment:</label>
      <input
        onChange={handleInput}
        type="text"
        id="comment"
        value={newComment}
      />
      <button type="submit">Submit Comment</button>
    </form>
  );
}
