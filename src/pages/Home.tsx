import { Box, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { buttonStyles } from "../styles/ButtonStyles";
import { countryNameStyles } from "../styles/InputStyles";

const Home = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCountry(e.currentTarget.value);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#0f1a2b",
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
          color: "#f2ffff",
          backgroundColor: "#14253d",
        }}
      >
        <TextField
          variant="outlined"
          label="Country Name"
          onChange={handleChange}
          value={country}
          sx={{
            ...countryNameStyles,
          }}
        />
        <Button
          variant="outlined"
          sx={{
            ...buttonStyles,
          }}
          disabled={country === ""}
          onClick={() => navigate(`/${country}`)}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
