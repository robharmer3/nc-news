import { useState } from "react";
import { deleteComment } from "../../endpoint";

export default function DeleteComment({ commentId, setIsDeleted }) {
  function handleDelete(event) {
    event.preventDefault();
    deleteComment(commentId);
    setIsDeleted(true);
  }
  return <button onClick={handleDelete}>Delete</button>;
}
