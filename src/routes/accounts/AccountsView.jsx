import React from "react";
import s from "./Accounts.module.css";
import { useHistory } from 'react-router-dom'
import { DashboardLayout } from "../../components/DashboardLayout";

const AccountsView = () => {
  const history = useHistory();
  return (
    <DashboardLayout
      active={"ACCOUNTS"}
      history={history}
    >
      Accounts content
    </DashboardLayout >
  )
}

export default AccountsView;