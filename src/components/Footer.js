import React, { Component } from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <Grid>
        <Nav>
          <NavItem
            eventKey={1} href="https://github.com/vrajat/dblint-ui">
            Github Project for UI
          </NavItem>
          <NavItem
            eventKey={2}
            href="https://github.com/vrajat/dblint">
            GitHub Project for database tools
          </NavItem>
        </Nav>

        <div className="text-center small copyright">
          Copyright Dblint.io 2018
        </div>
      </Grid>
    );
  }
}

export default Footer;
