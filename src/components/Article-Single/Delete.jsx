import { useState } from "react";
import { deleteComment } from "../../endpoint";

export default function DeleteComment({
  commentId,
  setIsDeleted,
  setComments,
}) {
  function handleDelete(event) {
    event.preventDefault();
    deleteComment(commentId).then(() => {
      setIsDeleted(true);
      setComments((currComments) => {
        const newComments = currComments.slice(1);
        return newComments;
      });
    });
  }
  return <button onClick={handleDelete}>Delete</button>;
}
