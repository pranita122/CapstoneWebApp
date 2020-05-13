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
import TopNav from "./topnav.jsx"
import SideBar from "./sideBar.jsx"
import MenuIcon from "@material-ui/icons/Menu";
import "./App.css";
import logo from "./logo.png";
import axios from "axios"; 
import Typed from 'react-typed';
import { grid } from "@material-ui/system";
import Results from "./Results";
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';
// set to true to use local server
const USING_SERVER = false;
const textStyle = { marginBottom: "30px" };
const mainStyle = { padding: "70px" };
const logoStyle = { height: "70px" };
// const payPalStyle = { marginRight: "30px" };
const tabsStyle = { flexGrow: 1 };

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#262A34",
    color: "#FFFFFF",
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  // useReducer ideally
const classes = useStyles();
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
        console.log("Button was clicked");
        setIsLoadingPhishingResults(true);
        console.log(testURL);
        const url = `http://127.0.0.1:5000/get_score/${testURL}`;
        // const url = "http://dummy.restapiexample.com/api/v1/employees";
        const response = await axios.get(url);
        console.log(response.data);
        setPhishingResults(response);
        setIsLoadingPhishingResults(false);
    } else {
        setPhishingResults({
          "html_score": {
            "prob_ok": "0.586",
            "prob_phish": "0.414"
          },
          "image_score": {
            "prob_found_logo": "0.8888888888888888",
            "blurriness": "0.09465110989608815"
          },
          "whois_score": {
            "registered_on":["1998-12-28"],
            "registrar":["CSC Corporate Domains, Inc."],
            "expiration_date":["2019-08-09"],
            "state":["FL","FL","FL"],
            "country":["US","US","US"]
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
            typeSpeed={40} style={{font: "Barlow"}}
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
      <TopNav></TopNav>
      <SideBar></SideBar>


      <div style={mainStyle}>
        <Typography style={textStyle} variant="h3">
          Welcome back, John!
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
