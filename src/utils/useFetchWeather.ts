import { useQuery } from "react-query";
import { IWeatherDetails } from "../interfaces/WeatherDetails";
import { getWeatherDetailsAPI } from "../services/GetWeatherDetails";

export const useFetchWeather = (capital: string) => {
  const { data, isFetched, isError, error } = useQuery<IWeatherDetails, Error>(
    ["product", capital],
    () => getWeatherDetailsAPI(capital)
  );

  return { data, error, isFetched, isError };
};
