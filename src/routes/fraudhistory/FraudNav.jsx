import React from "react";
import s from "./FraudHistory.module.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

export default function FraudNav(props) {
    // const
    return(
        <div className='grow'>
            <AppBar position="static">
                <Toolbar>
                    <div className='search'>
                        <div className='searchIcon'>
                            <SearchIcon />
                        </div>
                    </div>
                    <div className='grow' />
                </Toolbar>
            </AppBar>
        </div>
    );     
}