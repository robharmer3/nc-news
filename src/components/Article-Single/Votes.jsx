import { patchArticle } from "../../endpoint";
import useFetchApi from "../Hooks/useFetchApi";

export default function Votes({ article, setOptimisticVotes }) {
  function handleVote(vote) {
    setOptimisticVotes((currOptimsiticVotes) => {
      return currOptimsiticVotes + vote;
    });
    patchArticle(article.article_id, vote).catch(() => {
      setOptimisticVotes((currOptimsiticVotes) => {
        return currOptimsiticVotes - vote;
      });
    });
  }

  return (
    <div>
      <button onClick={() => handleVote(1)}>Vote+</button>
      <button onClick={() => handleVote(-1)}>Vote-</button>
    </div>
  );
}
