import React from "react";
import { Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import PropTypes from 'prop-types';
import s from "./Home.module.css";
import screenshot from "../../screenshot.png";

export default function Results(props) {
  return (
    <div className={s.display}>
      <div className={s.card}>
          <div className={s.cardTitle}>
              <h4> Html Score </h4>
          </div>
          <div className={s.cardBody}>  
              <div>
                  <p className={s.score}>{props.phishingResults.html_score["prob_ok"]}</p>
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
                  <p className={s.score}>{props.phishingResults.image_score["prob_found_logo"]}</p>
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
                  <p className={s.score}>{props.phishingResults.image_score["blurriness"]}</p>
                  <br />
                  <p className={s.explanation}>
                      Tells you if the submitted website 
                      has pixelated images that could have
                      been a result of re-using copyright logos.
                  </p>
              </div>
          </div> 
          <div> 
                <img src={screenshot} alt='screenshot of submitted URL' width='400px'/>
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
                    <p className={s.score2}>{props.phishingResults.whois_score["registered_on"]} </p>
                </div>
                <div>
                    <p className={s.subtitle} >Registrar </p>
                    <p className={s.score2}>{props.phishingResults.whois_score["registrar"]} </p>
                </div>
                <div>
                    <p className={s.subtitle}> Expiration Date </p> 
                    <p className={s.score2}>{props.phishingResults.whois_score["expiration_date"]} </p>
                </div>
                <div>
                    <p className={s.subtitle}> State </p> 
                    <p className={s.score2}>{props.phishingResults.whois_score["state"]} </p>
                </div>
                <div>
                    <p className={s.subtitle}> Country </p> 
                    <p className={s.score2}>{props.phishingResults.whois_score["country"]} </p>
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