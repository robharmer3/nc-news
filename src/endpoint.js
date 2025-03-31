import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://be-nc-news-amrw.onrender.com/api",
});

export function getArticles() {
  return apiClient
    .get("/articles")
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getTopics() {
  return apiClient
    .get("/topics")
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
