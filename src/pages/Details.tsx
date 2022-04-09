import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCountryDetailsAPI } from "../Services/GetCountryDetails";

const Details = () => {
  let params = useParams();
  const { data } = useQuery(["product", params.countryName], () =>
    getCountryDetailsAPI(params.countryName as string)
  );
  return <div></div>;
};

export default Details;
