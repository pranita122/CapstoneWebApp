import React from "react";
import axios from "axios";
import s from "./Home.module.css";
import { DashboardLayout } from "../../components/DashboardLayout";
import { Card, Form, Input, Typography } from "antd";
import HomeURLForm from "./HomeURLForm";
import HomeResults from "./HomeResults";
import Typed from 'react-typed';
import { useHistory } from 'react-router-dom'

const USING_SERVER = false;

const HomeView = (props) => {
  const history = useHistory();

  const [testURL, setTestURL] = React.useState("");
  const [phishingResults, setPhishingResults] = React.useState(null);
  const [isLoadingPhishingResults, setIsLoadingPhishingResults] = React.useState(
    false
  );

  function handleChange(event) {
    setTestURL(event.target.value);
  }

  const handleFormSubmit = async () => {
    setTimeout(function() {

      if (USING_SERVER) {
        // console.log("Button was clicked");
        // setIsLoadingPhishingResults(true);
        // console.log(testURL);
        // const url = `http://127.0.0.1:5000/get_score/${testURL}`;
        // // const url = "http://dummy.restapiexample.com/api/v1/employees";
        // const response = await axios.get(url);
        // console.log(response.data);
        // setPhishingResults(response);
        // setIsLoadingPhishingResults(false);
      } else {
        setPhishingResults({
          "html_score": {
            "prob_ok": "0.586",
            "prob_phish": "0.414"
          },
          "image_score": {
            "prob_found_logo": "0.888",
            "blurriness": "0.094"
          },
          "whois_score": {
            "registered_on": ["1998-12-28"],
            "registrar": ["CSC Corporate Domains, Inc."],
            "expiration_date": ["2019-08-09"],
            "state": ["FL", "FL", "FL"],
            "country": ["US", "US", "US"]
          }
        })
      }

    }, 3000)
    
  }

  const homeCardContent = React.useMemo(() => {
    if (isLoadingPhishingResults) {
      return (
        <Card className={s.resultsCard}>
          <div style={{ marginLeft: 5 + 'em' }}>
            <Typed
              strings={['Sending your request to server',
                'Taking screenshot of Suspect site', 'Extracting HTML from URL',
                'Comparing logo to screenshot', 'Running Model for HTML and URL score', 'Getting Results']}
              typeSpeed={40} style={{ font: "Barlow" }}
            />
          </div>
        </Card>
      );
    } else if (!isLoadingPhishingResults && phishingResults) {
      // display response data
      return (
        <Card className={s.resultsCard}>
          <HomeResults
            phishingResults={phishingResults}
          />
        </Card>
      )
    } else {
      return null;
    }
  }, [isLoadingPhishingResults, phishingResults]);

  return (
    <DashboardLayout
      active={"HOME"}
      history={history}
    >
      <Card className={s.urlFormCards}>
        <HomeURLForm
          handleFormSubmit={handleFormSubmit}
        />
      </Card>
      {homeCardContent}
    </DashboardLayout >
  )
}

export default HomeView;