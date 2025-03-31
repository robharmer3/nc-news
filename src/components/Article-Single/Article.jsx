import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCommentByArticleId, getSingleArticle } from "../../endpoint";

export default function Article() {
  const { article_id } = useParams();

  const [article, setArticle] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getSingleArticle(article_id).then(({ article }) => {
      setArticle(article);
    });
    getCommentByArticleId(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, []);

  return (
    <>
      <h3 className="Article-Title">{article.title}</h3>
      <section className="Single-Article">
        <h5>Topic: {article.topic}</h5>
        <h5>Author: {article.author}</h5>
        <img src={article.article_img_url} alt={article.title} />
        <p>{article.body}</p>
        <p>Created At: {article.created_at}</p>
        <p>Votes: {article.votes}</p>
      </section>
      <section className="Article-Comments">
        <h4 id="Comment-Title">Comments:</h4>
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <p>Comment: {comment.body}</p>
                <p>Author: {comment.author}</p>
                <p>Created At: {comment.created_at}</p>
                <p>Votes: {comment.votes}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
