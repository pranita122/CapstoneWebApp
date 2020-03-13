import React, { useState } from "react";
import {
  Typography,
  TextField,
  Grid,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Tabs,
  Tab
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./App.css";
import logo from "./logo.webp";
import axios from "axios";
import Typed from 'react-typed';


function App() {
  // useReducer ideally
  const [testURL, setTestURL] = useState("");

  const [phishingResults, setPhishingResults] = useState(null);
  const [isLoadingPhishingResults, setIsLoadingPhishingResults] = useState(
    false
  );

  const textStyle = { marginBottom: "30px" };
  const mainStyle = { padding: "70px" };
  const logoStyle = { height: "50px" };
  const payPalStyle = { marginRight: "30px" };
  const tabsStyle = { flexGrow: 1 };

  function handleChange(event) {
    setTestURL(event.target.value);
  }

  async function handleClick() {
    console.log("Button was clicked");
    setIsLoadingPhishingResults(true);
    console.log(testURL);
    const url = `http://127.0.0.1:5000/get_score/${testURL}`;
    // const url = "http://dummy.restapiexample.com/api/v1/employees";
    const response = await axios.get(url);
    console.log(response.data);
    setPhishingResults(response);
    setIsLoadingPhishingResults(false);
  }

  const phishingResultsView = React.useMemo(() => {
    if (isLoadingPhishingResults) {
      return (
      <div>
        <Typed
            strings={['Sending your request to server',
             'Taking screenshot of Suspect site', 'Extracting HTML from URL',
            'Comparing logo to screenshot', 'Running Model for HTML and URL score','Getting Results']}
            typeSpeed={40}
        />
      </div>);
    } else if (!isLoadingPhishingResults && phishingResults) {
      // display response data
      return (
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, backgroundColor: "blue" }}>
            phishingResults.wnatever....
          </div>
          <div style={{ flex: 1, backgroundColor: "green" }}>column 2</div>
          <div style={{ flex: 1, backgroundColor: "yellow" }}>
            {phishingResults.map((result, index) => {
              return <div key={index}>{result.employee_name}</div>;
            })}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }, [isLoadingPhishingResults, phishingResults]);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} style={logoStyle} />
          <Tabs value={0} style={tabsStyle}>
            <Tab label="Home" />
            <Tab label="Fraud History" />
            <Tab label="Fraud History" />
          </Tabs>
          <Button variant="contained" style={payPalStyle}>
            PayPal
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
