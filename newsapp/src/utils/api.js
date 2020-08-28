import axios from "axios";

export const getAllArticles = () => {
  return axios
    .get("https://khurram-news-app.herokuapp.com/api/articles")
    .then((res) => {
      console.log(res.data);
      return res.data.articles;
    });
};
