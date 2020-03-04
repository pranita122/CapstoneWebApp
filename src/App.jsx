import React, { useState } from 'react';
import { Typography, TextField, Grid, Button, AppBar, Toolbar, IconButton, Tabs, Tab, } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import './App.css';
import logo from "./logo.webp"

function App() {
  const textStyle = { marginBottom: '30px' };
  const mainStyle = { padding: '70px'};
  const logoStyle = { height: '50px'};
  const payPalStyle = {marginRight: '30px'};
  const tabsStyle = {flexGrow: 1};

  function handleChange(event) {
    console.log('Function was called') 
    console.log(event.target.value)
    setTestURL(event.target.value)
  }
  
  async function handleClick() {
    console.log('Button was clicked')

    const url = "http://impostor-blocker.com/v1/" + testURL + "/[brandid]"

    const response = await fetch(url)
    const text = await response.text();

    console.log(text);
  }

  const [testURL, setTestURL] = useState('')

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} style={logoStyle}/>
          <Tabs value={0} style={tabsStyle}>
            <Tab label="Home"/>
            <Tab label="Fraud History"/>
            <Tab label="Fraud History"/>
          </Tabs>
          <Button variant="contained" style={payPalStyle}>
            PayPal
          </Button>
        </Toolbar>
      </AppBar>
      <div style={mainStyle}>
        <Typography style={textStyle} variant='h4'>
          Enter URL
        </Typography>
        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={10}>
            <TextField variant="filled" fullWidth value={testURL} onChange={handleChange}/>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" size='large' onClick={handleClick}>Submit</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}



export default App;
