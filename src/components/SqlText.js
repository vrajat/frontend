import React, { Component } from 'react';

import axios from 'axios';

import './SqlText.css';

import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

class SqlText extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
      url: "https://dblint.io",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    var self = this
    const sql = {
      sql: this.state.value,
      dialect: this.props.dialect
    }

    const url = this.state.url + "/api/dblint/" + this.props.feature.api
    axios.post(url, sql)
    .then(function (response) {
      console.log(response)
      self.setState({value: response.data.sql});
    })
    .catch(function (error) {
      console.log(error)
    })
    event.preventDefault();
  }

  render() {
    return (
          <Form onSubmit={this.handleSubmit} className="sqltext flex-fill">
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
