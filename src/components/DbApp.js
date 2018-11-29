import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav';
import SqlText from './SqlText';
import Helmet from 'react-helmet-async';
import { connect } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';

class DbApp extends Component {
  render() {
    return(
      <div className="dbApp">
        <Helmet title={"dblint.io | " + 
	    this.props.dialect.display + " " + 
	    this.props.feature.display} />
        <Container fluid>
          <Row><Col><Header/></Col></Row>
          <Row>
            <Col sm={1}><SideNav/></Col>
            <Col >
	    <Row><SqlText/></Row>
	    <Row><Footer/></Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    dialect: state.dialect,
    feature: state.feature
  };
}

export default connect(mapStateToProps)(DbApp)
