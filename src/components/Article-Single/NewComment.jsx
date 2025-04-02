import { useState } from "react";
import useFetchApi from "../Hooks/useFetchApi";
import { postCommentByArticleId } from "../../endpoint";

export default function NewComment({ article_id }) {
  // const [input, setInput] = useState("");

  const [newComment, setNewComment] = useState({
    username: "butter_bridge",
    body: "",
  });

  function handleInput(event) {
    // setInput(event.target.value);
    setNewComment((previousState) => {
      return { ...previousState, body: event.target.value };
    });
  }

  function handleNewComment(event) {
    event.preventDefault();
    postCommentByArticleId(article_id, newComment);
    // setInput("");
  }

  console.log(newComment, "<<<newcomponet file");

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
