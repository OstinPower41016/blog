import axios from "./axios";

export const login = async (userCredentials: { email: string; password: string }) => {
  try {
    const { email, password } = userCredentials;
    const response = await axios.post("/users/login", { user: { email, password } });
    localStorage.setItem("auth", response.data.user.token);
    localStorage.setItem('username', response.data.user.username);
    return response;
  } catch (error) {
    console.log(error);
  }
};
