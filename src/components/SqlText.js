import React, { Component } from 'react';

import axios from 'axios';

import './SqlText.css';
import '../lib/MixPanel';

import { Alert, Button, Col, Form, FormGroup, FormText, Input, Row } from "reactstrap";
import { connect } from 'react-redux';
import { Mixpanel } from "../lib/MixPanel";
import { Route, Switch } from "react-router";
import { features } from "../constants";

class SqlText extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
      showAlert: false,
      errorMessage: '',
      userError: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({showAlert: false});

    var self = this;
    const sql = {
      sql: this.state.value,
      dialect: this.props.dialect.name
    };

    const url = "/api/dblint/" + this.props.feature.api;
    axios({
      method: 'post',
      url: url,
      data: sql,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then(function (response) {
      response.data.success ?
        self.setState({value: response.data.sql}) :
        self.setState({showAlert: true, userError: true,
          errorMessage:response.data.errorMessage});
    }).catch(function (error) {
        console.log(error);
        self.setState({showAlert: true, userError: false,
          errorMessage:"Internal Error. Please contact Support"});
      });

    Mixpanel.track(this.props.feature.name, {
      dialect: this.props.dialect.name,
      success: !this.state.showAlert,
      userError: this.state.userError
    });
    event.preventDefault();
  }

  render() {
    return (
        <div className="h-100 sqltext">
        <Alert isOpen={this.state.showAlert} color="danger"
               toggle={() => {this.setState({showAlert: false})}}>
          <h4>Error in processing the SQL query!</h4>
          <p>
            {this.state.errorMessage}
          </p>
        </Alert>
        <Form onSubmit={this.handleSubmit} className="h-100">
          <FormGroup className="h-75" row>
            <Input className="h-100 w-100" autoFocus rows="18" top
                          spellCheck="false"
                          placeholder="-- Enter SQL here" value={this.state.value}
                          onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup row justify-content-center>
            <Col/>
            <Col className="justify-content-center">
            <Button onClick={this.handleSubmit} color="primary" className="align-middle"
                  size="lg" block>{this.props.feature.actionString}</Button>
            </Col>
            <Col/>
          </FormGroup>
        </Form>
        <Switch>
          {
            this.props.dialect.features.map((f, idx) => {
              return (<Route
                  key={idx}
                  path={'/' + this.props.dialect.name.toLowerCase() + '/' + features[f].url}
                  exact={true}
                  name={features[f].display}
                  render={props => (
                    <SqlText {...props} />
                  )} />)

            })
          }
        </Switch>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dialect: state.dialect,
    feature: state.feature,
  };
}

export default connect(mapStateToProps)(SqlText)
