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

const SideBar = () => {
    const classes = useStyles();

    return (
        <Drawer style={{backgroundColor:"262A34"}}
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
              <ListItem button key={1} style={{margin: "3rem 0"}}>
                <ListItemIcon><InboxIcon /> </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
              <ListItem button key={1} style={{margin: "3rem 0"}}>
                <ListItemIcon><InboxIcon /> </ListItemIcon>
                <ListItemText primary={"Fraud History"} />
              </ListItem>
              <ListItem button key={1} style={{margin: "3rem 0"}}>
                <ListItemIcon><InboxIcon /> </ListItemIcon>
                <ListItemText primary={"Your Credentials"} />
              </ListItem>
              <ListItem button key={1} style={{margin: "3rem 0"}}>
                <ListItemIcon><InboxIcon /> </ListItemIcon>
                <ListItemText primary={"Accounts"} />
              </ListItem>
          </List>
          
        </div>
      </Drawer>
    )
}

export default SideBar;