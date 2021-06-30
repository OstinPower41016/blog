import axios from "../../axios";

export interface IRequestCreateUser {
  username: string;
  email: string;
  password: string;
}

export const create = async (userData: IRequestCreateUser) => {
  try {
    const response = await axios.post("/users", { user: { ...userData } });
    localStorage.setItem("auth", response.data.user.token);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
