import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { error } from "console";
import { isError, useQuery } from "react-query";
import { IWeatherDetails } from "../interfaces/WeatherDetails";
import { getWeatherDetailsAPI } from "../services/GetWeatherDetails";
import { flexCol, flexRow } from "../styles/flex";

interface IWeatherProps {
  setVisiblity: boolean;
  capital: string[];
}

const WeatherCard = (props: IWeatherProps) => {
  const { data, isFetched, isError, error } = useQuery<IWeatherDetails, Error>(
    ["product", props.capital[0]],
    () => getWeatherDetailsAPI(props.capital[0] as string)
  );

  return (
    <Card
      sx={{
        width: "35vw",
        visibility: props.setVisiblity ? "visible" : "hidden",
      }}
      elevation={3}
    >
      <CardContent>
        {isFetched && !isError && data ? (
          <>
            <Box
              component="img"
              sx={{
                height: "20vh",
                width: "100%",
                objectFit: "contain",
              }}
              alt="Flag"
              src={data.current.weather_icons[0]}
            />
            <Box
              sx={{
                ...flexCol,
                justifyContent: "space-evenly",
                p: "1.4rem",
              }}
            >
              <Typography sx={{ fontSize: 21, fontWeight: 600 }} gutterBottom>
                {data.current.temperature}&deg;C
              </Typography>
              <Typography sx={{ fontSize: 21 }} gutterBottom>
                Wind Speed: {data.current.wind_speed}
              </Typography>
              <Typography sx={{ fontSize: 21 }} gutterBottom>
                Precipitation: {data.current.precip}
              </Typography>
            </Box>
          </>
        ) : isError ? (
          <>
            <Box>There was an Error: {error}</Box>
          </>
        ) : (
          <Box
            sx={{
              ...flexRow,
              justifyContent: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <CircularProgress />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
