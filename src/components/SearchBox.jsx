import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchBox = ({updateInfo}) => {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false)
   
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d7dfa4de9e6cdd92f3cafaee3954a813"

    let getwheatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        const jsonresp = await response.json();
        console.log(jsonresp) 
        let resultObj = {
            city : city,
            feelslike : jsonresp.main.feels_like,
            temp : jsonresp.main.temp,
            humidity : jsonresp.main.humidity,
            tempMax : jsonresp.main.temp_max,
            tempMin : jsonresp.main.temp_min,
            weather : jsonresp.weather[0].description
        }
         console.log(resultObj)
        return resultObj
        }
        catch(error){
            throw error;
            //console.log(err)
        }
    }

    let handlechange = (e) => {
        setCity(e.target.value)
    }
    let handlesubmit= async (e) => {
       try{
        e.preventDefault();
        setCity("")
        let newInfo = await getwheatherInfo();
        updateInfo(newInfo)
       }
       catch(error){
        setError(true)
       }
    }

  return (
    <div style={{textAlign: "center"}}>
      <form onSubmit={handlesubmit}>
      <TextField id="city" label="Enter City" variant="outlined" required onChange={handlechange} value={city} /><br></br><br></br>
      <Button variant="contained" color='secondary' type="submit" >Check wheather</Button>
      {error && <p style={{color: 'red'}}>No such place exists!</p>}
      </form>
    </div>
  )
}

export default SearchBox
