import { useState } from "react";
import { patchArticle } from "../../endpoint";

export default function Votes({ article, setOptimisticVotes, voteName, vote }) {
  const [isClicked, setIsClicked] = useState(false);
  function handleVote(vote) {
    setOptimisticVotes((currOptimsiticVotes) => {
      return currOptimsiticVotes + vote;
    });
    setIsClicked(true);
    patchArticle(article.article_id, vote).catch(() => {
      setOptimisticVotes((currOptimsiticVotes) => {
        return currOptimsiticVotes - vote;
      });
    });
  }

  return (
    <div>
      <button onClick={() => handleVote(vote)} disabled={isClicked}>
        {voteName}
      </button>
    </div>
  );
}
