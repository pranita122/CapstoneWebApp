import React from "react";
import axios from "axios";
import s from "./Home.module.css";
import { DashboardLayout } from "../../components/DashboardLayout";
import { Card, Form, Input, Typography } from "antd";
import HomeURLForm from "./HomeURLForm";
import HomeResults from "./HomeResults";
import Typed from 'react-typed';
import { useHistory } from 'react-router-dom'

const USING_SERVER = true;

const HomeView = (props) => {
  const history = useHistory();

  const [testURL, setTestURL] = React.useState("");
  const [phishingResults, setPhishingResults] = React.useState(null);
  const [isLoadingPhishingResults, setIsLoadingPhishingResults] = React.useState(
    false
  );

  function handleChange(event) {
    event.preventDefault();
    setTestURL(event.target.value);
  }

  const handleFormSubmit = async () => {
    

      if (USING_SERVER) {
        setIsLoadingPhishingResults(true);
        console.log(testURL);
        const url = `http://127.0.0.1:5000/v1/threatdetector/${testURL}`;
        // const url = "http://dummy.restapiexample.com/api/v1/employees";
        const response = await axios.get(url);
        console.log(response.data);
        setTimeout(function() {
        setPhishingResults(response.data);
        console.log("the phishing results are")
        console.log({phishingResults})
        console.log("fdfg")
        setIsLoadingPhishingResults(false);
        }, 3000)

      } else {
        setPhishingResults({
          "id": "1",
          "url": "https://bankofamerica-secureidentityverificationservicesonlineinstantl...",
          "date": "05/15/20",
          "result": "Phish",
          "html_url": 55,
          "logo": 75,
          "blur": 88,
          "whois":
            {
              "registered_on": ["1998-12-28"],
              "registrar": ["CSC Corporate Domains, Inc."],
              "expiration_date": ["2019-08-09"],
              "state": ["FL", "FL", "FL"],
              "country": ["US", "US", "US"]
            }
        })
      }

    
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
        // <Card className={s.resultsCard}>
          <HomeResults
            phishingResults={phishingResults}
          />
        // </Card>
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
          handleChange={handleChange}
        />
      </Card>
      {homeCardContent}
    </DashboardLayout >
  )
}

export default HomeView;