import { Box, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import WeatherCard from "../components/WeatherCard";
import { ICountryDetails } from "../interfaces/CountryDetails";
import { flexRow } from "../styles/flex";
import { useFetchCountry } from "../utils/useFetchCountry";

const Details = () => {
  let params = useParams();
  const [showWeather, setShowWeather] = useState<boolean>(false);

  const { data, isFetched, isError, error } = useFetchCountry(
    params.countryName as string
  );

  if (isError) {
    return (
      <>
        <Box>There was an Error: {error}</Box>
      </>
    );
  } else if (isFetched && !isError && data) {
    return (
      <Box
        sx={{
          ...flexRow,
          justifyContent: showWeather ? "space-evenly" : "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#0f1a2b",
        }}
      >
        <CountryCard
          data={data[0] as ICountryDetails}
          getWeatherSignal={() => setShowWeather(true)}
        />
        {showWeather && (
          <WeatherCard
            setVisiblity={showWeather}
            capital={data[0].capital as string[]}
          />
        )}
      </Box>
    );
  } else {
    return (
      <Box
        role="loadbtn"
        sx={{
          ...flexRow,
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#14253d",
        }}
      >
        <CircularProgress
          sx={{
            color: "#5290bf",
          }}
        />
      </Box>
    );
  }
};

export default Details;
