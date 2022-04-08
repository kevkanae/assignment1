import axios from "axios";

export const getMethod = async (url: string, config = {}) => {
  axios.defaults.withCredentials = true;
  const { data } = await axios.get(url, config);
  return data;
};
