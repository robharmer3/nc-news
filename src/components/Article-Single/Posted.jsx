export default function Posted({ optimisticComment }) {
  console.log(optimisticComment);
  return (
    <section className="Article-New-Comments">
      <h3>Comment Posted</h3>
      <li>
        <p>Comment: {optimisticComment.body}</p>
        <p>Author: {optimisticComment.author}</p>
        <p>Created At: {optimisticComment.created_at}</p>
        <p>Votes: {optimisticComment.votes}</p>
      </li>
    </section>
  );
}
