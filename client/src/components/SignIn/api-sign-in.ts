import axios from "../../axios";

export const create = async () => {
  try {
    const response = (
      await axios.get("/users", {
        method: "POST",
      })
    ).data;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
