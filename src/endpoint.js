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

export function patchArticle(article_id, vote) {
  return apiClient
    .patch(`/articles/${article_id}`, {
      inc_votes: vote,
    })
    .then(({ data }) => {
      return data;
    });
}
export function postCommentByArticleId(article_id, comment) {
  console.log(article_id, "<<endpotin id");
  console.log(comment, "<<<endpoit comment");
  return apiClient
    .post(`/articles/${article_id}/comments`, {
      username: "butter_bridge",
      body: "hello",
    })
    .then(({ data }) => {
      console.log(data);
      return data;
    });
}
