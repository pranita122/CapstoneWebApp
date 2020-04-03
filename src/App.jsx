// Capstone 2020 : Imposter Blocker
// React Dashboard

import React, { useState } from "react";
import {
  Typography,
  TextField,
  Grid,
  Button,
  AppBar,
  Toolbar,
  Tabs,
  Tab
} from "@material-ui/core";
import "./css/App.css";
import logo from "./logo.webp";
import axios from "axios";
import Typed from 'react-typed';
import Results from "./Results";

// set to true to use local server
const USING_SERVER = true;
const textStyle = { marginBottom: "30px" };
const mainStyle = { padding: "70px" };
const logoStyle = { height: "50px" };
const payPalStyle = { marginRight: "30px" };
const tabsStyle = { flexGrow: 1 };

function App() {
  // useReducer ideally
  const [testURL, setTestURL] = useState("");
  const [phishingResults, setPhishingResults] = useState(null);
  const [isLoadingPhishingResults, setIsLoadingPhishingResults] = useState(
    false
  );

  function handleChange(event) {
    setTestURL(event.target.value);
  }

  async function handleClick() {
      if (USING_SERVER) {
        setIsLoadingPhishingResults(true);
        console.log(testURL);
        const url = `http://127.0.0.1:5000/v1/threatdetector/${testURL}`;
        const response = await axios.get(url);
        console.log(response.data);
        setPhishingResults(response);
        setIsLoadingPhishingResults(false);
    } else {
        setPhishingResults({
          "html_score": {
            "prob_ok": "N/A",
            "prob_phish": "N/A"
          },
          "image_score": {
            "prob_found_logo": "N/A",
            "blurriness": "N/A"
          },
          "whois_score": {
            "registered_on":["N/A"],
            "registrar":["N/A"],
            "expiration_date":["N/A"],
            "state":["N/A"],
            "country":["N/A"]
          }
        })
    }
  }

  const phishingResultsView = React.useMemo(() => {
    if (isLoadingPhishingResults) {
      return (
      <div style={{marginLeft: 5 + 'em'}}>
        <Typed
            strings={['Sending your request to server',
             'Taking screenshot of Suspect site', 'Extracting HTML from URL',
            'Comparing logo to screenshot', 'Running Model for HTML and URL score','Getting Results']}
            typeSpeed={40} style={{font: "Roboto"}}
        />
      </div>);
    } else if (!isLoadingPhishingResults && phishingResults) {
      // display response data
      return <Results phishingResults={phishingResults}/>
    } else {
      return null;
    }
  }, [isLoadingPhishingResults, phishingResults]);

  return (
    <div>
      <AppBar position="static" style={{backgroundColor: "#A1C1DF"}}>
        <Toolbar>
          <img src={logo} style={logoStyle} />
          <Tabs value={0} style={tabsStyle}>
            <Tab label="Home" />
            <Tab label="Fraud History" />
            <Tab label="Good Info" />
            <Tab label="Trend Analysis" />
          </Tabs>
          <Button variant="contained" style={payPalStyle}>
            Bank of America
          </Button>
        </Toolbar>
      </AppBar>
      <div style={mainStyle}>
        <Typography style={textStyle} variant="h4">
          Enter URL
        </Typography>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={10}>
            <TextField
              variant="filled"
              fullWidth
              value={testURL}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" size="large" onClick={handleClick}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
      {phishingResultsView}
    </div>
  );
}

export default App;
