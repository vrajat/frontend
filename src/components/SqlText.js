import React, { Component } from "react";

import axios from "axios";

import "./SqlText.css";
import "../lib/MixPanel";

import { Alert, Button, Col, Form, FormGroup, Input } from "reactstrap";
import { connect } from "react-redux";
import { Mixpanel } from "../lib/MixPanel";

class SqlText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showAlert: false,
      errorMessage: "",
      userError: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ showAlert: false });

    let self = this;
    const sql = {
      sql: this.state.value,
      dialect: this.props.dialect.name
    };
    let featureDisplay = this.props.feature.display;

    const url = "/api/dblint/" + this.props.feature.api;
    axios({
      method: "post",
      url: url,
      data: sql,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(function(response) {
      response.data.success ?
        self.setState({ value: response.data.sql }) :
        self.setState({
          showAlert: true, userError: true,
          errorMessage: response.data.errorMessage
        });
      Mixpanel.track(sql.dialect, {
        feature: featureDisplay,
        success: response.data.success,
        userError: true
      });

    }).catch(function(error) {
      console.log(error);
      self.setState({
        showAlert: true, userError: false,
        errorMessage: "Internal Error. Please contact Support"
      });
      Mixpanel.track(sql.dialect, {
        feature: featureDisplay,
        success: false,
        userError: false
      });
    });

    event.preventDefault();
  }

  render() {
    return (
      <div className="h-100 sqltext">
        <Alert isOpen={this.state.showAlert} color="danger"
               toggle={() => {
                 this.setState({ showAlert: false });
               }}>
          <h4>Error in processing the SQL query!</h4>
          <p>
            {this.state.errorMessage}
          </p>
        </Alert>
        <Form onSubmit={this.handleSubmit} className="h-100">
          <FormGroup className="h-75" row>
            <Input type="textarea" autoFocus
                   spellCheck="false"
                   placeholder="-- Enter SQL here" value={this.state.value}
                   onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup row>
            <Col/>
            <Col className="justify-content-center">
              <Button onClick={this.handleSubmit} color="primary" className="align-middle"
                      size="lg" block>{this.props.feature.actionString}</Button>
            </Col>
            <Col/>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dialect: state.dialect,
    feature: state.feature
  };
}

export default connect(mapStateToProps)(SqlText);
