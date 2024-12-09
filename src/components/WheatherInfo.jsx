import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

const WheatherInfo = ({ info }) => {
  let Rain_img =
    "https://plus.unsplash.com/premium_photo-1676212747574-c401d596e853?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let Hot_img =
    "https://plus.unsplash.com/premium_photo-1669377593804-2270c3436d69?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let Cold_img =
    "https://images.unsplash.com/photo-1561553873-e8491a564fd0?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <Card sx={{ maxWidth: 345, width: 400 }}>
        <CardMedia
          sx={{ height: 180 }}
          image={
            info.humidity > 80 ? Rain_img : info.temp > 15 ? Hot_img : Cold_img
          }
          title="weather img"
        />
        <CardContent style={{ textAlign: "left" }}>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{" "}
            {info.humidity > 80
              ? <ThunderstormIcon/>
              : info.temp > 15
              ? <WbSunnyIcon/>
              : <AcUnitIcon/>}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Temprature: {info.temp}&deg;C</p>
            <p>Humidity :{info.humidity}</p>
            <p>MAX Temprature : {info.tempMax}&deg;C</p>
            <p>MIN Temprature: {info.tempMin}&deg;C</p>
            <p>
              The Weather can be described as <i>{info.weather}</i> and feels
              like : {info.feelslike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default WheatherInfo;
