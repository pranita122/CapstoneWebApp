import React from "react";
import s from "./DashboardLayout.module.css";
import logo from "../../logo.png";
import { Typography } from "antd";

const DashboardLayoutView = (props) => {
  return (
    <div className={s.dashboardRoot}>

      <div className={s.dashboardHeader}>
        <div className={s.dashboardHeaderLogo}>
          <img src={logo} alt="Smiley face" height="50" width="50" />
          <Typography className={s.dashboardHeaderLogoText}>
            Impostor Blocker
          </Typography>
        </div>
        <div className={s.dashboardHeaderLinks}>
          <Typography.Text className={s.dashboardHeaderLink}>
            About Us
          </Typography.Text>
          <Typography.Text className={s.dashboardHeaderLink}>
            Our API
          </Typography.Text>
        </div>
      </div>

      <div className={s.dashboardMain}>
        <div className={s.dashboardSideBar}>
          <div className={s.dashboardSidebarNavItems}>
            <div
              className={
                props.active === "HOME"
                  ? s.dashboardSideBarNavItemActive
                  : s.dashboardSidebarNavItem
              }
              onClick={() => props.history.push("/home")}
            >
              Home
          </div>
            <div
              className={
                props.active === "FRAUD_HISTORY"
                  ? s.dashboardSideBarNavItemActive
                  : s.dashboardSidebarNavItem
              }
              onClick={() => props.history.push("/fraudhistory")}
            >
              Fraud History
          </div>
            <div
              className={
                props.active === "YOUR_CREDENTIALS"
                  ? s.dashboardSideBarNavItemActive
                  : s.dashboardSidebarNavItem
              }
              onClick={() => props.history.push("/yourcredentials")}
            >
              Your Credentials
          </div>
            <div
              className={
                props.active === "ACCOUNTS"
                  ? s.dashboardSideBarNavItemActive
                  : s.dashboardSidebarNavItem
              }
              onClick={() => props.history.push("/accounts")}
            >
              Accounts
          </div>
          </div>
          <div className={s.dashboardSideBarFooter}>
            <button className={s.dashboardSideBarFooterBtnSignOut} onClick={() => props.history.push("/login")}>
              Sign Out
             </button>
          </div>
        </div>
        <div className={s.dashboardContent}>
          {props.children}
        </div>
      </div>

    </div>
  )
}

export default DashboardLayoutView;