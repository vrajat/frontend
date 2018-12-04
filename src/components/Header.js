import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import PropTypes from 'prop-types';

import { AppNavbarBrand, AppSidebarToggler } from '../lib/coreui';
import logo from '../assets/img/brand/logo.png'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class Header extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 100, height:55, alt: 'Dblint Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Container>
          <Row>
            <Col/>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
