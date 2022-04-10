import { useQuery } from "react-query";
import { ICountryDetails } from "../interfaces/CountryDetails";
import { getCountryDetailsAPI } from "../services/GetCountryDetails";

export const useFetchCountry = (country: string) => {
  const { data, isFetched, isError, error } = useQuery<
    ICountryDetails[],
    Error
  >(["product", country], () => getCountryDetailsAPI(country as string));

  return { data, error, isFetched, isError };
};