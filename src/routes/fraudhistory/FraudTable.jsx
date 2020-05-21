import React from "react";
import s from "./FraudHistory.module.css";
import { useHistory } from 'react-router-dom'
import { DashboardLayout } from "../../components/DashboardLayout";
// import { Table, Collapse } from 'reactstrap';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { createMuiTheme } from '@material-ui/core/styles'

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    

    console.log(props)
    return(
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell component="th" scope="row">
                    {row.url}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.result}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: '10px', paddingTop: '10px' }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                        <div className={s.display}>
                            <div className={s.card}>
                                <div className={s.cardTitle}>
                                    <h4> Html Score </h4>
                                </div>
                                <div className={s.cardBody}>  
                                    <div>
                                        <p className={s.score}>{row.html_url}</p>
                                    </div>
                                    <div className={s.explanation}>
                                        <br />
                                        <br />
                                        This score gives a probability that the submitted website is 
                                        phishing. The model returns this score based on data points 
                                        collected from the HTML and URL of the submitted website.
                                    </div>
                                </div>
                                
                            </div>

                            <div className={s.card}>
                                <div className={s.cardTitle}>
                                    <h4> Image Score </h4>
                                </div>
                                <div className={s.cardBody2}>
                                    <div> 
                                        <p className={s.subtitle}>Logo Score </p>
                                        <p className={s.score}>{row.logo}</p>
                                        <br />
                                        <p className={s.explanation}>
                                            Logos are one of the key indicators of an 
                                            imposter website. This score represents the 
                                            likelihood of your brand logo on the submitted 
                                            website.
                                        </p>
                                    </div> 
                                    <div> 
                                        <p className={s.subtitle}>Blur Score </p>
                                        <p className={s.score}>{row.blur}</p>
                                        <br />
                                        <p className={s.explanation}>
                                            Tells you if the submitted website 
                                            has pixelated images that could have
                                            been a result of re-using copyright logos.
                                        </p>
                                    </div>
                                </div> 
                                {/* <div> 
                                        <img src={screenshot} alt='screenshot of submitted URL' width='400px'/>
                                </div> */}
                            </div>

                            <div className={s.card}>
                                <div className={s.cardTitle}>
                                    <h4> Whois </h4>
                                </div>
                                <div className={s.cardBody3}>
                                    <div className={s.whois}>
                                        <div>
                                            <p className={s.subtitle}> 
                                                Registered on: <textblock className={s.score2}>{row.whois.registered_on}</textblock>
                                            </p>
                                        </div>
                                        <div>
                                            <p className={s.subtitle}>
                                                Registrar: <textblock className={s.score2}>{row.whois.registrar}</textblock>
                                            </p>
                                        </div>
                                        <div>
                                            <p className={s.subtitle}> 
                                                Expiration Date: <textblock className={s.score2}>{row.whois.expiration_date}</textblock>
                                            </p> 
                                        </div>
                                        <div>
                                            <p className={s.subtitle}> 
                                                State: <textblock className={s.score2}>{row.whois.state}</textblock>
                                            </p> 
                                        </div>
                                        <div>
                                            <p className={s.subtitle}> 
                                                Country: <textblock className={s.score2}>{row.whois.country}</textblock>
                                            </p> 
                                        </div>
                                    </div>
                                </div> 
                                <div>
                                    <br />
                                    <p className={s.explanation}> 
                                        Tells us about the background information about the url such as date
                                        registered, domain registrar name etc. for further actions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        </Box>
                    </Collapse>
                 </TableCell>
            </TableRow>
            {/* <tr key={props.data.id} onClick = {handleRowClick}>
                <td scope="row">{props.data.id}</td>
                <td>{props.data.url}</td>
                <td>{props.data.date}</td>
                <td>{props.data.result}</td>
            </tr> */}
        </React.Fragment>
    )
}

export default function FraudTable(props) {

    return(
        <React.Fragment>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align="left">#</TableCell>
                            <TableCell>URL</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Result</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.map((row) => (
                            <Row key={row.id} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    )
}
