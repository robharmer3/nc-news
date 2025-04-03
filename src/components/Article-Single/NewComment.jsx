import { useContext, useState } from "react";
import { postCommentByArticleId } from "../../endpoint";
import { UserContext } from "../context/User";

export default function NewComment({
  article_id,
  setIsPosted,
  comments,
  setComments,
}) {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState({
    username: user.username,
    body: "",
  });

  function handleInput(event) {
    setNewComment((previousState) => {
      return { ...previousState, body: event.target.value };
    });
  }

  function handleNewComment(event) {
    event.preventDefault();
    postCommentByArticleId(article_id, newComment);
    setComments((currComment) => {
      return [...currComment, newComment];
    });
    setIsPosted(true);
  }

  return (
    <form className="new-comment" onSubmit={handleNewComment}>
      <label htmlFor="comment">Comment:</label>
      <input
        onChange={handleInput}
        type="text"
        id="comment"
        value={newComment.body}
      />
      <button type="submit">Submit Comment</button>
    </form>
  );
}
