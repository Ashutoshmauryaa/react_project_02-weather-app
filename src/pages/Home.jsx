import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import Sunset from "../assests/Images/sunset.jpg";
import Weather from "../assests/Images/weather.jpeg";
import Navbar from "../Components/Navbar";
import Information from "../Components/Information";
const Component = styled(Box)({
  height: "100vh",
  display: "flex",
  //   justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  width: "65%",
});
const Image = styled(Box)({
  backgroundImage: `url(${Sunset})`,
  width: "30%",
  height: "80%",
  backgroundSize: "cover",
  borderRadius: "20px 0 0 20px",
});
const Home = () => {
  const [result, setResult] = useState({});
  return (
    <Component>
      <Image></Image>
      <Box style={{ width: "70%", height: "80%", border: "0.6px solid" }}>
        <Navbar setResult={setResult} />
        <Information result={result} />
      </Box>
    </Component>
  );
};

export default Home;
