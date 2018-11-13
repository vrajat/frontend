import React, { Component } from 'react';
import axios from 'axios';
import './SqlText.css';

class SqlText extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const sql = this.state.value
    axios.post('http://dblint.com/api/dblint/pretty', {sql})
    .then(function (response) {
      this.setState({value: response});
    })
    .catch(function (error) {
      console.log(error)
    })
    event.preventDefault();
  }

  render() {
    return (
        <div className="sqltext">
          <form onSubmit={this.handleSubmit}>
            <textarea id="sqllint_source" rows="18" autoFocus spellCheck="false"
                placeholder="-- Enter SQL here" value={this.state.value}
                onChange={this.handleChange}/>
            <p/>
            <input type="submit" value="Pretty Print!" />
          </form>
        </div>
    );
  }
}

export default (SqlText)
