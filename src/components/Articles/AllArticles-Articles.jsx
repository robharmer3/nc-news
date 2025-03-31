export default function ArticlesArticle({ article }) {
  return (
    <li className="Article-List-Item">
      <h4>{article.title}</h4>
      <h5>Topic: {article.topic}</h5>
      <h5>Author: {article.author}</h5>
      <img src={article.article_img_url} alt={article.title} />
    </li>
  );
}
