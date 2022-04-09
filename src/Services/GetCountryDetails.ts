import axios from "axios";
import { countryDetailsURL } from "../utils/Constants";

export const getCountryDetailsAPI = async (country: string) => {
  const { data } = await axios.get(countryDetailsURL + country);
  return data;
};
