import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div>
      <Navbar inverse>
        <Navbar.Header>
            <Navbar.Brand>
              <a href="#">DbLint</a>
            </Navbar.Brand>
            <Navbar.Text color="#fff"> Tools for the Database Engineer</Navbar.Text>
        </Navbar.Header>
      </Navbar>
      </div>
    );
  }
}


export default (Header);
