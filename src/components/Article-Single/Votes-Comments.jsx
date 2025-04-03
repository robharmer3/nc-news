import { patchComments } from "../../endpoint";

export default function VotesComments({ commentId, setOptimisticVotes }) {
  function handleVote(vote) {
    setOptimisticVotes((currOptimsiticVotes) => {
      return currOptimsiticVotes + vote;
    });
    patchComments(commentId, vote).catch(() => {
      setOptimisticVotes((currOptimsiticVotes) => {
        return currOptimsiticVotes - vote;
      });
    });
  }

  return (
    <div>
      <button onClick={() => handleVote(1)}>Like+</button>
      <button onClick={() => handleVote(-1)}>Dislike-</button>
    </div>
  );
}
