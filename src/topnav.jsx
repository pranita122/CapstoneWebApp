import React, { Component } from 'react';
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

const USING_SERVER = false;
const textStyle = { marginBottom: "30px" };
const mainStyle = { padding: "70px" };
const logoStyle = { height: "70px" };
const tabsStyle = { flexGrow: 1 };
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));
// const payPalStyle = { marginRight: "30px" };

const TopNav = () => {
    const classes = useStyles();
        
        return (
    <AppBar position="fixed" className={classes.appBar} style={{backgroundColor: "#2F323E"}} >
        <Toolbar>
        <img src={logo} style={logoStyle} />
          <Tabs value={0} style={tabsStyle}>
            <Tab label="Impostor Blocker" />
            <Tab label="" />
            <Tab label="" />
            <Tab label="" />
            <Tab label="" />
            <Tab label="About Us" />
            <Tab label="Rest API" />
            <Tab label="Sign Out" />
          </Tabs>
        </Toolbar>
      </AppBar>
    )
    }


export default TopNav;