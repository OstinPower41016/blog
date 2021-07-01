import axios from "./axios";

import { login } from "./sign-in";

export interface IRequestCreateUser {
  username: string;
  email: string;
  password: string;
}

export const create = async (userData: IRequestCreateUser) => {
  try {
    await axios.post("/users", { user: { ...userData } });
    const { username, ...restInfo } = userData;
    await login(restInfo);
  } catch (error) {
    console.log(error);
  }
};
