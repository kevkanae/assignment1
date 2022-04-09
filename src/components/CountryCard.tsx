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

const CountryCard = (props: { data: ICountryDetails }) => {
  return (
    <Card
      sx={{
        height: "91vh",
        width: "42vw",
      }}
    >
      <CardContent>
        <Box
          component="img"
          sx={{
            height: "40vh",
            width: "40vw",
            objectFit: "fill",
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
          <Typography sx={{ fontSize: 18 }} gutterBottom>
            Country: {props.data.name.official}
          </Typography>
          <Typography sx={{ fontSize: 18 }} gutterBottom>
            Population: {props.data.population}
          </Typography>
          <Typography sx={{ fontSize: 18 }} gutterBottom>
            LatLang: {props.data.latlng}
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
          <Button size="small" variant="outlined">
            Get Weather in Capital
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CountryCard;
