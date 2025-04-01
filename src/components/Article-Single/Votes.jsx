import { useEffect, useState } from "react";
import { patchArticle } from "../../endpoint";
import useFetchApi from "../Hooks/useFetchApi";

export default function Votes({ article, vote, setVote }) {
  function handleVotePlus(event) {
    event.preventDefault();

    useFetchApi(patchArticle, article.article_id);
  }
  function handleVoteMinus(event) {
    event.preventDefault();
    setVote((currentVote) => currentVote - 1);
  }

  return (
    <div>
      <button onClick={handleVotePlus}>Vote+</button>
      <button onClick={handleVoteMinus}>Vote-</button>
    </div>
  );
}
