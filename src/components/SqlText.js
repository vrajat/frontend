import React, { Component } from 'react';

import axios from 'axios';

import './SqlText.css';

import { Alert, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

class SqlText extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
      showAlert: false,
      errorMessage: ''
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

    const url = "http://sat/api/dblint/" + this.props.feature.api;
    axios({
      method: 'post',
      url: url,
      data: sql,
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      }
    }).then(function (response) {
          console.log(response);
          response.data.success ?
            self.setState({value: response.data.sql}) :
            self.setState({showAlert: true, errorMessage:response.data.errorMessage});
        })
        .catch(function (error) {
          console.log(error);
          self.setState({showAlert: true,
            errorMessage:"Internal Error. Please contact Support"});
        });
    event.preventDefault();
  }

  render() {
    return (
      <div className="sqltext flex-md-fill">
        <Alert show={this.state.showAlert} dismissible variant="danger"
          onClose={() => {this.setState({showAlert: false})}}>
          <Alert.Heading>Error in processing the SQL query!</Alert.Heading>
          <p>
            {this.state.errorMessage}
          </p>
        </Alert>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Control as="textarea" rows="18" autoFocus
                spellCheck="false" resize="false"
                  placeholder="-- Enter SQL here" value={this.state.value}
                  onChange={this.handleChange}/>
              <p/>
              <Button onClick={this.handleSubmit} variant="primary"
                size="large">{this.props.feature.actionString}</Button>
            </Form.Group>
          </Form>
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
