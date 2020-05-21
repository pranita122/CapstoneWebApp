import React from "react";
import s from "./FraudHistory.module.css"
import axios from "axios";
import { useHistory } from 'react-router-dom'
import { DashboardLayout } from "../../components/DashboardLayout";
import { Table } from 'reactstrap';
import CSVReader from 'react-csv-reader'
import FraudTable from "./FraudTable.jsx";
import { createMuiTheme } from '@material-ui/core/styles';
import downloadbutton from '../../downloadbutton.png';

// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
// import Collapse from '@material-ui/core/Collapse';
// import IconButton from '@material-ui/core/IconButton';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const USING_SERVER = false;

const FraudHistoryView = () => {
  const history = useHistory();

  const handleDownload = () => {
    console.log('download')
  }

  const historyResults = [
    {
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
    },
    {
      "id": "2",
      "url": "bankofamerica.com",
      "date": "05/15/20",
      "result": "Safe",
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
    },
    {
      "id": "3",
      "url": "bankoofamerica.com",
      "date": "05/15/20",
      "result": "Safe",
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
    }
  ]

  // const [isLoadingHistory, setIsLoadingHistory] = React.useState(false);
  // const [historyResults, setHistoryResults] = React.useState(null);

  // const componentDidMount = () => {
    // if(USING_SERVER) {
    //   setIsLoadingHistory(true);
    //   const url = '';
    //   const response = axios.get(url);
    //   console.log(response.data);
    //   setHistoryResults(response);
    //   setIsLoadingHistory(false);
    // } else {
      // setHistoryResults([
      //   {
      //     "url": "bankkofamerica.com",
      //     "date": "04/05/20",
      //     "result": "Phish",
      //     "html_url": 55,
      //     "logo": 75,
      //     "blur": 88,
      //     "whois":
      //       {
      //         "registered_on": ["1998-12-28"],
      //         "registrar": ["CSC Corporate Domains, Inc."],
      //         "expiration_date": ["2019-08-09"],
      //         "state": ["FL", "FL", "FL"],
      //         "country": ["US", "US", "US"]
      //       }
      //   },
      //   {
      //     "url": "bankofamerica.com",
      //     "date": "04/05/20",
      //     "result": "Safe",
      //     "html_url": 55,
      //     "logo": 75,
      //     "blur": 88,
      //     "whois":
      //       {
      //         "registered_on": ["1998-12-28"],
      //         "registrar": ["CSC Corporate Domains, Inc."],
      //         "expiration_date": ["2019-08-09"],
      //         "state": ["FL", "FL", "FL"],
      //         "country": ["US", "US", "US"]
      //       }
      //   },
      //   {
      //     "url": "bankoofamerica.com",
      //     "date": "04/05/20",
      //     "result": "Phish",
      //     "html_url": 55,
      //     "logo": 75,
      //     "blur": 88,
      //     "whois":
      //       {
      //         "registered_on": ["1998-12-28"],
      //         "registrar": ["CSC Corporate Domains, Inc."],
      //         "expiration_date": ["2019-08-09"],
      //         "state": ["FL", "FL", "FL"],
      //         "country": ["US", "US", "US"]
      //       }
      //   }
      // ])
    // }
  // }

  // console.log(historyResults);

  return (
    <DashboardLayout
      active={"FRAUD_HISTORY"}
      history={history}
    >
      <FraudTable data={historyResults} />
      <br />
      <br />
      <br />
      <button className={s.btn} onClick={handleDownload}> 
        <img src={downloadbutton} alt='download' height='50px' width='30px'/>
      </button>
    </DashboardLayout >
  )
}

export default FraudHistoryView;