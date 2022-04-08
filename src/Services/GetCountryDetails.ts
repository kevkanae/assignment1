import { countryDetailsURL } from "../utils/Constants";
import { getMethod } from "./GetMethod";

export const getMeAPI = async (country: string) => {
  return await getMethod(countryDetailsURL + country);
};
