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
          Welcome back, John
        </Typography.Text>
      </div>
      <Form onFinish={() => console.log("done")} className={s.urlForm}>
        <Form.Item name="singleURL">
          <Input
            placeholder="Enter a suspicious URL"
            className={s.singleURLInput} />
        </Form.Item>
        <Typography.Text
          className={s.inputDivider}>
          OR
            </Typography.Text>
        <Form.Item name="multipleURLs">
          <Input.TextArea
            rows={5}
            placeholder="Enter a comma-separated list of suspicious URLs"
            className={s.multipleURLsInput} />
        </Form.Item>
        <button className={s.submitURLButton} onClick={props.handleFormSubmit}>
          Submit
        </button>
      </Form>
    </React.Fragment >
  )
}

export default HomeURLForm;