import { useState } from "react";
import { patchComments } from "../../endpoint";

export default function VotesComments({
  commentId,
  setOptimisticVotes,
  voteName,
  vote,
}) {
  const [isClicked, setIsClicked] = useState(false);
  function handleVote(vote) {
    setOptimisticVotes((currOptimsiticVotes) => {
      return currOptimsiticVotes + vote;
    });
    setIsClicked(true);
    patchComments(commentId, vote).catch(() => {
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
