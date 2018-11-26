import React, { Component } from 'react';
import { Navbar,Nav, NavDropdown } from 'react-bootstrap';
import { dialects } from '../constants/dialects';
import FontAwesome from 'react-fontawesome';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://dblint.io",
      db: "MYSQL"
    };
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <FontAwesome name="database"/>
            <a href={this.state.url}> DbLint</a>
          </Navbar.Brand>
          <Navbar.Text color="#fff"> Tools for the Database Engineer</Navbar.Text>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <NavDropdown title="Databases" id="basic-nav-dropdown">
                {
                  Object.keys(dialects).map((key) => {
                    return (
                      <NavDropdown.Item key={key}>{dialects[key]}</NavDropdown.Item>
                    )
                  })
                }
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}


export default (Header);
