import React from "react";
import s from "./Accounts.module.css";
import { useHistory } from 'react-router-dom'
import { DashboardLayout } from "../../components/DashboardLayout";
import profiles from '../../profiles.png';

const AccountsView = () => {
  const history = useHistory();
  return (
    <DashboardLayout
      active={"ACCOUNTS"}
      history={history}
    >
       <img src={profiles} alt="profiles" width='800px'/>
    </DashboardLayout >
  )
}

export default AccountsView;