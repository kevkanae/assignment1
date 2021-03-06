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
  data: ICountryDetails | any;
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
          role="flagbox"
          component="img"
          sx={{
            height: "30vh",
            width: "100%",
            objectFit: "contain",
            mb: "1rem",
          }}
          alt="Flag"
          src={props.data?.flags.png ?? ""}
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
            role="offname"
            gutterBottom
          >
            {props.data?.name.official ?? "-"}
          </Typography>
          <Typography sx={{ fontSize: 18 }} role="popu" gutterBottom>
            Population: {props.data?.population ?? "-"}
          </Typography>
          <Typography sx={{ fontSize: 18 }} role="cap" gutterBottom>
            Capital: {props.data?.capital ?? "-"}
          </Typography>
          <Typography sx={{ fontSize: 18 }} role="latlang" gutterBottom>
            LatLang: {props.data?.latlng[0] ?? "-"},
            {props.data?.latlng[1] ?? "-"}
          </Typography>
          <Typography sx={{ fontSize: 18 }} role="urltoimg" gutterBottom>
            <a
              href={props.data?.coatOfArms.png ?? "-"}
              style={{ color: "whitesmoke" }}
            >
              {props.data?.coatOfArms.png ?? "-"}
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
            role="weatherbtn"
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
