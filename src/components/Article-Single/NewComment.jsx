import { useState } from "react";
import { postCommentByArticleId } from "../../endpoint";

export default function NewComment({
  article_id,
  newComment,
  setNewComment,
  setIsPosted,
  setOptimisticComments,
}) {
  function handleInput(event) {
    setNewComment((previousState) => {
      return { ...previousState, body: event.target.value };
    });
    setOptimisticComments((previousState) => {
      return { ...previousState, body: event.target.value };
    });
  }

  function handleNewComment(event) {
    event.preventDefault();
    postCommentByArticleId(article_id, newComment);
    setIsPosted(true);
  }

  return (
    <form className="new-comment" onSubmit={handleNewComment}>
      <label htmlFor="comment">Comment:</label>
      <input
        onChange={handleInput}
        type="text"
        name="comment"
        id="comment"
        value={newComment.body}
      />
      <button type="submit">Submit Comment</button>
    </form>
  );
}
