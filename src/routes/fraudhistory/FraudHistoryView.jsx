import React from "react";
import s from "./FraudHistory.module.css";
import { useHistory } from 'react-router-dom'
import { DashboardLayout } from "../../components/DashboardLayout";

const FraudHistoryView = () => {
  const history = useHistory();
  return (
    <DashboardLayout
      active={"FRAUD_HISTORY"}
      history={history}
    >
      Fraud History content
    </DashboardLayout >
  )
}

export default FraudHistoryView;