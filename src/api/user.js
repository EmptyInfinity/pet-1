import axios from "axios";

export const getUser = () => axios.get("/api");

export const login = (email, password) => {
  axios.post("/api/login", { email, password });
};

export const register = (email, password) => {
  axios.post("/api/register", { email, password });
};

export default {
  getUser,
  login,
  register,
};
