import axios from "./axios";

export const create = async (article: any) => {
  try {
    const token = localStorage.getItem("auth");
    const response = await axios.post(
      "/articles/",
      { article },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticle = async (articleId: string) => {
  try {
    const response = await (await axios.get(`/articles/${articleId}`)).data;

    return response.article;
  } catch (error) {
    console.log(error);
  }
};
