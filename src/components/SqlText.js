import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import './SqlText.css';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import Helmet from 'react-helmet-async';
import { connect } from 'react-redux';

class SqlText extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
      action: "pretty",
      url: "https://dblint.io",
      dialect: props.dialect
    };

    console.log(this.state);

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
      dialect: this.state.dialect
    }
    console.log(sql);

    const url = this.state.url + "/api/dblint/" + this.state.action
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
      <div>
        <Helmet title="dblint.io | Sql Formatter" />
        <Header/>
        <div className="sqltext">
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <FormControl componentClass="textarea" rows="18" autoFocus
                spellCheck="false" resize="false"
                  placeholder="-- Enter SQL here" value={this.state.value}
                  onChange={this.handleChange}/>
              <p/>
              <Button onClick={this.handleSubmit} bsStyle="primary"
                bsSize="large">Pretty Print!</Button>
            </FormGroup>
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    dialect: state.app.dialect
  };
}

export default connect(mapStateToProps)(SqlText)
