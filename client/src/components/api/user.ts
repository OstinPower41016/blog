import axios from "./axios";

export const getUser = async () => {
  try {
    const t = localStorage.getItem("auth");
    const response = await axios.get("/user/", { headers: { Authorization: "Bearer" + t } });

    console.log(response.data);
  } catch (error) {}
};
