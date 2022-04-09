import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { ICountryDetails } from "../interfaces/CountryDetails";
import { flexCol } from "../styles/flex";

interface ICountryCardProps {
  data: ICountryDetails;
  getWeatherSignal: Function;
}

const CountryCard = (props: ICountryCardProps) => {
  return (
    <Card
      sx={{
        height: "91vh",
        width: "42vw",
      }}
      elevation={3}
    >
      <CardContent>
        <Box
          component="img"
          sx={{
            height: "40vh",
            width: "100%",
            objectFit: "contain",
          }}
          alt="Flag"
          src={props.data.flags.svg}
        />
        <Box
          sx={{
            ...flexCol,
            justifyContent: "space-evenly",
            p: "1.4rem",
          }}
        >
          <Typography sx={{ fontSize: 18, fontWeight: 600 }} gutterBottom>
            Country: {props.data.name.official}
          </Typography>
          <Typography sx={{ fontSize: 18 }} gutterBottom>
            Population: {props.data.population}
          </Typography>
          <Typography sx={{ fontSize: 18 }} gutterBottom>
            LatLang: {props.data.latlng[0]}, {props.data.latlng[1]}
          </Typography>
          <Typography sx={{ fontSize: 18 }} gutterBottom>
            ImageURL: <a href={props.data.coatOfArms.png}>Image</a>
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            ...flexCol,
            justifyContent: "center",
            p: "1.4rem",
            height: "10vh",
            width: "42vw",
          }}
        >
          <Button
            size="small"
            variant="outlined"
            onClick={() => props.getWeatherSignal()}
          >
            Get Weather in Capital
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CountryCard;
