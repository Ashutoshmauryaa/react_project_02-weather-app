import React, { useState } from "react";
import { Box, Button, InputBase, styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import { getWeather } from "../Services/api";
const Container = styled(Box)({
  backgroundColor: "#445A6F",
  padding: 10,
});
const Input = styled(InputBase)({
  color: "#FFF",
  marginRight: 20,
  fontsize: 18,
});
const Getbutton = styled(Button)({
  background: "#e67e22",
});
const Navbar = ({ setResult }) => {
  const [data, setData] = useState({ city: "", country: "" });

  const handleChange = async (e) => {
    if (e.target.value != "") {
      setData({ ...data, [e.target.name]: e.target.value });
    } else {
      setResult(null);
    }
  };
  const GetWeatherInfo = async () => {
    if (data.city || data.country != "") {
      let response = await getWeather(data.city, data.country);
      setResult(response);
    } else {
      alert("Please Enter City's name or Country's name");
    }
  };
  return (
    <Container>
      <Input placeholder="City" name="city" onChange={(e) => handleChange(e)} />
      <Input
        placeholder="Country"
        name="country"
        onChange={(e) => handleChange(e)}
      />
      {/* <Input label="City" variant="standard" />
      <Input label="Country" variant="standard" /> */}
      <Getbutton variant="contained" onClick={GetWeatherInfo}>
        Get Weather
      </Getbutton>
    </Container>
  );
};

export default Navbar;
