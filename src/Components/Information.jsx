import React from "react";
import { Box, Typography, styled } from "@mui/material";
import {
  LocationOn,
  SettingsBrightness,
  Opacity,
  Brightness5,
  Brightness6,
  Dehaze,
  Cloud,
} from "@mui/icons-material";

const Rowitem = styled(Typography)({
  padding: 10,
  fontSize: 20,
  letterSpacing: 2,
  "&>svg": {
    marginRight: 10,
  },
});
const Error = styled(Typography)({
  color: "red",
  margin: 50,
  padding: 20,
});
const Information = ({ result }) => {
  return result && Object.keys(result).length > 0 ? (
    <Box style={{ margin: "30px 60px" }}>
      <Rowitem>
        <LocationOn /> Location :{result.name},{result.sys.country}
      </Rowitem>
      <Rowitem>
        <SettingsBrightness />
        Temperature :{result.main.temp}
      </Rowitem>
      <Rowitem>
        <Opacity />
        Humidity :{result.main.humidity}
      </Rowitem>
      <Rowitem>
        <Brightness5 />
        Sun Rise :{new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
      </Rowitem>
      <Rowitem>
        <Brightness6 />
        Sun Set :{new Date(result.sys.sunset * 1000).toLocaleTimeString()}
      </Rowitem>
      <Rowitem>
        <Dehaze />
        Nature:{result.weather[0].main}
      </Rowitem>
      <Rowitem>
        <Cloud />
        Cloud :{result.clouds.all}%
      </Rowitem>
    </Box>
  ) : (
    <Error> Please enter city or country to check weather</Error>
  );
};

export default Information;
