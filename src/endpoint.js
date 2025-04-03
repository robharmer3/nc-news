import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://be-nc-news-amrw.onrender.com/api",
});

export function getArticles(filter, page, age) {
  return apiClient
    .get(`/articles`, {
      params: { topic: filter, page: page },
    })
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
  return apiClient
    .post(`/articles/${article_id}/comments`, comment)
    .then(({ data }) => {
      return data;
    });
}

export function deleteComment(comment_id) {
  return apiClient.delete(`/comments/${comment_id}`);
}

export function patchComments(comment_id, vote) {
  return apiClient
    .patch(`/comments/${comment_id}`, {
      inc_votes: vote,
    })
    .then(({ data }) => {
      return data;
    });
}
