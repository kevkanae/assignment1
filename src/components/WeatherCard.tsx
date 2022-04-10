import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { flexCol, flexRow } from "../styles/flex";
import { useFetchWeather } from "../utils/useFetchWeather";

interface IWeatherProps {
  setVisiblity: boolean;
  capital: string[];
}

const WeatherCard = (props: IWeatherProps) => {
  const { data, isFetched, isError, error } = useFetchWeather(
    props.capital[0] as string
  );

  return (
    <Card
      sx={{
        visibility: props.setVisiblity ? "visible" : "hidden",
        width: "35vw",
        color: "#f2ffff",
        backgroundColor: "#14253d",
        borderRadius: 3,
        p: "1rem",
      }}
      elevation={7}
    >
      <CardContent>
        {isFetched && !isError && data ? (
          <>
            <Box
              component="img"
              sx={{
                height: "24vh",
                width: "100%",
                objectFit: "contain",
                mb: "1rem",
              }}
              alt="Flag"
              src={data.current.weather_icons[0]}
            />
            <Box
              sx={{
                ...flexCol,
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{ fontSize: 21, fontWeight: 600, color: "white" }}
                gutterBottom
              >
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
            <CircularProgress
              sx={{
                color: "#5290bf",
              }}
            />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
