import React from "react";
import s from "./YourCredentials.module.css";
import { useHistory } from 'react-router-dom'
import { DashboardLayout } from "../../components/DashboardLayout";
import companyCred from '../../companyCred.png'

const YourCredentialsView = () => {
  const history = useHistory();
  return (
    <DashboardLayout
      active={"YOUR_CREDENTIALS"}
      history={history}
    >
      <img src={companyCred} alt="credentials" width='800px'/>
    </DashboardLayout >
  )
}

export default YourCredentialsView;