import Votes from "./Votes";

export default function ArticleCard({
  article,
  optimisticVotes,
  setOptimisticVotes,
}) {
  console.log(article);
  return (
    <section className="Single-Article">
      <img src={article.article_img_url} alt={article.title} />
      <h3>Topic: {article.topic}</h3>
      <p>{article.body}</p>
      <p>By {article.author}</p>
      <p>Published: {article.created_at}</p>
      <h4>{article.votes + optimisticVotes} people Like this</h4>
      <Votes article={article} setOptimisticVotes={setOptimisticVotes} />
    </section>
  );
}
