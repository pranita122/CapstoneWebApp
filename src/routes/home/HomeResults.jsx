import React, {useState} from "react";
import { Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import PropTypes from 'prop-types';
import s from "./Home.module.css";
import Image from "./Image.jsx"

export default function Results(props) {
    return (
        <div className={s.container}> 

            <div className={s.result}> 
                Result: {props.phishingResults.result}
            </div>

            <div className={s.display}>
                <div className={s.card}>
                    <div className={s.cardTitle}>
                        <p> HTML + URL Score </p>
                    </div>
                    <div className={s.cardBody}>  
                        <div>
                            <p className={s.score}>{props.phishingResults.html_url}</p>
                        </div>
                    </div>
                    <div className={s.explanation}>
                        This score gives a probability that the submitted website is 
                        phishing. The model returns this score based on data points 
                        collected from the HTML and URL of the submitted website.
                    </div>
                </div>

                <div className={s.card}>
                    <div className={s.cardTitle}>
                        <p> IMAGE Score </p>
                    </div>
                    <div className={s.cardBody2}>
                        <div> 
                            <p className={s.subtitle}>Logo Score </p>
                            <p className={s.score2}>{props.phishingResults.logo}</p>
                            <p className={s.explanation}>
                                Logos are one of the key indicators of an 
                                imposter website. This score represents the 
                                likelihood of your brand logo on the submitted 
                                website.
                            </p>
                        </div> 
                        <div> 
                            <p className={s.subtitle}>Blur Score </p>
                            <p className={s.score2}>{props.phishingResults.blur}</p>
                            <p className={s.explanation}>
                                Tells you if the submitted website 
                                has pixelated images that could have
                                been a result of re-using copyright logos.
                            </p>
                        </div>
                    </div> 
                    <div className={s.img}> 
                        <Image imURL="../../screenshot.png"/>
                    </div>
                </div>

                <div className={s.card}>
                    <div className={s.cardTitle}>
                        <p> WHOIS </p>
                    </div>
                    <div className={s.cardBody3}>
                        <div className={s.whois}>
                            <div>
                                <p className={s.subtitle}> Registered on: <textblock className={s.score3}> {props.phishingResults.whois.registered_on} </textblock> </p>
                                
                            </div>
                            <div>
                                <p className={s.subtitle}> Registrar: <textblock className={s.score3}> {props.phishingResults.whois.registrar} </textblock> </p>
                            </div>
                            <div>
                                <p className={s.subtitle}> Expiration Date: <textblock className={s.score3}> {props.phishingResults.whois.expiration_date} </textblock> </p> 
                            </div>
                            <div>
                                <p className={s.subtitle}> State: <textblock className={s.score3}> {props.phishingResults.whois.state} </textblock> </p> 
                            </div>
                            <div>
                                <p className={s.subtitle}> Country: <textblock className={s.score3}> {props.phishingResults.whois.country}</textblock> </p> 
                            </div>
                        </div>
                    </div> 
                    <div>
                        <p className={s.explanation2}> 
                            Tells us about the background information about the url such as date
                            registered, domain registrar name etc. for further actions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

Results.propTypes = {
  phishingResults: PropTypes.object.isRequired
}