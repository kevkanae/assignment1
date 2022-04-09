import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import { ICountryDetails } from "../interfaces/CountryDetails";
import { getCountryDetailsAPI } from "../services/GetCountryDetails";
import { flexCol } from "../styles/flex";

const Details = () => {
  let params = useParams();
  const { data, isFetched, isError, error } = useQuery<
    ICountryDetails[],
    Error
  >(["product", params.countryName], () =>
    getCountryDetailsAPI(params.countryName as string)
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
          ...flexCol,
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <CountryCard data={data[0] as ICountryDetails} />
      </Box>
    );
  } else {
    return <Box>Loading...</Box>;
  }
};

export default Details;
