import axios from "axios";
import { weatherDetailsURL } from "../utils/Constants";

export const getWeatherDetailsAPI = async (capital: string) => {
  const { data } = await axios.get(weatherDetailsURL + capital);
  return data;
};
