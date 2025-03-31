import { useEffect, useState } from "react";
import { getArticles } from "../../endpoint";
import ArticlesArticle from "./AllArticles-Articles";

export default function ArticlesList({ filter }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles(filter).then(({ articles }) => {
      setArticles(articles);
    });
  }, [filter]);

  return (
    <>
      <ul className="Article-List">
        {articles.length === 0 ? (
          <p>No Items Found</p>
        ) : (
          articles.map((article) => {
            return (
              <ArticlesArticle key={article.article_id} article={article} />
            );
          })
        )}
      </ul>
    </>
  );
}
