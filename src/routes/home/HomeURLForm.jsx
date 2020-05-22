import React from "react";
import s from "./Home.module.css";
import { DashboardLayout } from "../../components/DashboardLayout";
import { Card, Form, Input, Typography } from "antd";
import PropTypes from 'prop-types';

const HomeURLForm = (props) => {
  return (
    <React.Fragment>
      <div className={s.urlFormCardHeader}>
        <Typography.Text className={s.urlFormCardHeaderText}>
          Welcome back
        </Typography.Text>
      </div>
      <Form onFinish={() => console.log("done")} className={s.urlForm} onChange={props.handleChange}>
        <Form.Item name="singleURL">
          <Input
            placeholder="Enter a suspicious URL"
            className={s.multipleURLsInput}/>
        </Form.Item>
        <Form.Item name="multipleURLs">
          <p className={s.note}>NOTE: to enter multiple URLs, enter a comma-separated list</p>
        </Form.Item>
        <button className={s.submitURLButton} onClick={props.handleChange, props.handleFormSubmit}>
          Submit
        </button>
      </Form>
    </React.Fragment >
  )
}

export default HomeURLForm;