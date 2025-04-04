import { Link } from "react-router";

export default function ArticleCard({ article }) {
  return (
    <li className="Article-List-Item">
      <h4>
        <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
      </h4>
      <h5>Topic: {article.topic}</h5>
      <img src={article.article_img_url} alt={article.title} />
      <h5>Author: {article.author}</h5>
      <h5>Published: {new Date(article.created_at).toLocaleString()}</h5>
    </li>
  );
}
