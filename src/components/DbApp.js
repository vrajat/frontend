import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav';
import SqlText from './SqlText';

import { Container, Row, Col } from 'react-bootstrap';

class DbApp extends Component {
  render() {
    return(
      <div className="dbApp">
        <Container fluid>
          <Row><Col><Header/></Col></Row>
          <Row>
            <Col sm={2}><SideNav/></Col>
            <Col lg={true}>
            <SqlText/>
            </Col>
          </Row>
          <Row><Footer/></Row>
        </Container>
      </div>
    )
  }
}

export default DbApp;
