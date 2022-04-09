import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { ICountryDetails } from "../interfaces/CountryDetails";
import { buttonStyles } from "../styles/ButtonStyles";
import { flexCol } from "../styles/flex";

interface ICountryCardProps {
  data: ICountryDetails;
  getWeatherSignal: Function;
}

const CountryCard = (props: ICountryCardProps) => {
  return (
    <Card
      sx={{
        width: "35vw",
        backgroundColor: "#14253d",
        borderRadius: 3,
        p: "1rem",
        color: "#f2ffff",
      }}
      elevation={7}
    >
      <CardContent>
        <Box
          component="img"
          sx={{
            height: "30vh",
            width: "100%",
            objectFit: "contain",
            mb: "1rem",
          }}
          alt="Flag"
          src={props.data.flags.svg}
        />
        <Box
          sx={{
            ...flexCol,
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            sx={{
              fontSize: 21,
              fontWeight: 600,
              color: "white",
              textAlign: "center",
            }}
            gutterBottom
          >
            {props.data.name.official}
          </Typography>
          <Typography sx={{ fontSize: 18 }} gutterBottom>
            Population: {props.data.population}
          </Typography>
          <Typography sx={{ fontSize: 18 }} gutterBottom>
            LatLang: {props.data.latlng[0]}, {props.data.latlng[1]}
          </Typography>
          <Typography sx={{ fontSize: 18 }} gutterBottom>
            <a href={props.data.coatOfArms.png} style={{ color: "whitesmoke" }}>
              Image URL
            </a>
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
            size="medium"
            sx={{
              ...buttonStyles,
            }}
            onClick={() => props.getWeatherSignal()}
          >
            Get Weather
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CountryCard;
