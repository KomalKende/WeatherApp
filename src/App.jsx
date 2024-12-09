import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import WheatherApp from './components/WheatherApp';

function App() {
  const [value, setValue] = React.useState(5);

  return (
    <>
      {/* <Button variant="contained" color="secondary" endIcon={<SendIcon />}>Let's see </Button>
      <div>
      <Typography component="legend">Rating</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          // console.log(newValue)
        }}
      />
      </div> */}
      <WheatherApp/>
    </>
  )
}

export default App
