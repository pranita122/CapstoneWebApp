import React from "react";
import s from "./YourCredentials.module.css";
import { useHistory } from 'react-router-dom'
import { DashboardLayout } from "../../components/DashboardLayout";

const YourCredentialsView = () => {
  const history = useHistory();
  return (
    <DashboardLayout
      active={"YOUR_CREDENTIALS"}
      history={history}
    >
      Your Credentials content
    </DashboardLayout >
  )
}

export default YourCredentialsView;