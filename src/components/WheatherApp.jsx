import React, { useState } from 'react'
import SearchBox from './SearchBox'
import WheatherInfo from './WheatherInfo'
import Typography from "@mui/material/Typography";

const WheatherApp = () => {
    
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Pune",
        feelslike : 24.05,
        temp : 25.05,
        humidity : 47,
        tempMax : 25.05,
        tempMin : 25.05,
        weather : "haze"
      })

      let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
      }

  return (
    <div style={{textAlign: 'center'}}>
     <Typography><h1>Wheather App by Komal: </h1></Typography> 
      <SearchBox updateInfo={updateInfo}/>
      <WheatherInfo info={weatherInfo}/>
    </div>
  )
}

export default WheatherApp
