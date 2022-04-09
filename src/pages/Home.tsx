import { Box, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const [country, setCountry] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCountry(e.currentTarget.value);

  const handleSubmit = () => navigate(`/${country}`);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          boxShadow: 2,
          height: "30vh",
          width: "35vw",
          borderRadius: 2,
          p: "1.4rem",
        }}
      >
        <TextField
          variant="standard"
          label="Country Name"
          onChange={handleChange}
          value={country}
        />
        <Button
          variant="outlined"
          disabled={country === ""}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
