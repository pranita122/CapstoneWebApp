import React from "react";
import { Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import PropTypes from 'prop-types';
import s from "./Home.module.css";
// import screenshot from "../../screenshot.png";
import Image from "./Image.jsx"

export default function Results(props) {
//   var CONST_URL = props.phishingResults.url
//   var CONST_URL = '../../'.concat(CONST_URL.substring(7), '.png') ;
//   console.log("const url is ")
//   console.log(CONST_URL)

  return (
    <div className={s.display}>
      <div className={s.card}>
          <div className={s.cardTitle}>
              <h4> Html Score </h4>
          </div>
          <div className={s.cardBody}>  
              <div>
                  <p className={s.score}>{props.phishingResults.html_url}</p>
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
                  <p className={s.score}>{props.phishingResults.logo}</p>
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
                  <p className={s.score}>{props.phishingResults.blur}</p>
                  <br />
                  <p className={s.explanation}>
                      Tells you if the submitted website 
                      has pixelated images that could have
                      been a result of re-using copyright logos.
                  </p>
              </div>
          </div> 
          <div> 
                <Image imURL="../../screenshot.png"/>
          </div>
      </div>

      <div className={s.card}>
          <div className={s.cardTitle}>
              <h4> Whois </h4>
          </div>
          <div className={s.cardBody3}>
            <div className={s.whois}>
                <div>
                    <p className={s.subtitle}> Registered on </p>
                    <p className={s.score2}>{props.phishingResults.whois.registered_on} </p>
                </div>
                <div>
                    <p className={s.subtitle} >Registrar </p>
                    <p className={s.score2}>{props.phishingResults.whois.registrar} </p>
                </div>
                <div>
                    <p className={s.subtitle}> Expiration Date </p> 
                    <p className={s.score2}>{props.phishingResults.whois.expiration_date} </p>
                </div>
                <div>
                    <p className={s.subtitle}> State </p> 
                    <p className={s.score2}>{props.phishingResults.whois.state} </p>
                </div>
                <div>
                    <p className={s.subtitle}> Country </p> 
                    <p className={s.score2}>{props.phishingResults.whois.country} </p>
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
  );
}

Results.propTypes = {
  phishingResults: PropTypes.object.isRequired
}