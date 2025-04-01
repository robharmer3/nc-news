export default function NewComment() {
  function handleNewComment(event) {
    event.preventDefault();
    console.log(event.target.value);
  }

  return (
    <form className="new-comment" onSubmit={handleNewComment}>
      <label htmlFor="comment">Comment:</label>
      <input type="text" name="comment" id="comment" />
      <button onClick={handleNewComment}>Submit Comment</button>
    </form>
  );
}
