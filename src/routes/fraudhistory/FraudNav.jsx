import React from "react";
import s from "./FraudHistory.module.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import InputBase from '@material-ui/core/InputBase';
import GetAppIcon from '@material-ui/icons/GetApp';
import {CSVLink, CSVDownload} from 'react-csv';

export default function FraudNav(props) {

    
    return(
        <div className='grow'>
            <AppBar position="static">
                <Toolbar className={s.Toolbar}>
                    <div className={s.download}>
                        <div className={s.downloadIcon}>
                            <CSVLink data={JSON.stringify(props.historyResults)}> <GetAppIcon /> </CSVLink>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );     
}