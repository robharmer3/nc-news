import axios from "axios";
import { data } from "react-router";

const apiClient = axios.create({
  baseURL: "https://be-nc-news-amrw.onrender.com/api",
});

export function getArticles(filter) {
  return apiClient
    .get("/articles", { params: { topic: filter } })
    .then(({ data }) => {
      return data;
    });
}

export function getSingleArticle(article_id) {
  return apiClient.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
}

export function getCommentByArticleId(article_id) {
  return apiClient.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
}

export function getTopics() {
  return apiClient.get("/topics").then(({ data }) => {
    return data;
  });
}

export function patchArticle(article_id) {
  const votesData = {
    inc_votes: 1,
  };

  return apiClient
    .patch(`/articles/${article_id}`, votesData)
    .then(({ data }) => {
      return data;
    });
}
