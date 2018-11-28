import React, { Component } from 'react';
import { Container, Nav, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { dialects, default_url } from '../constants/dialects';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      martVersion: 'unknown',
      feVersion: 'unknown'
    }
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Nav className='flex-column'>
              <label className="medium bold">Supported Databases:</label>
                {
                  Object.keys(dialects).map((key, index) => {
                    return (
                      <Nav.Item key={index}>
                      <Nav.Link href={default_url(key)} key={index} db={key}
                            eventkey={key} className="small capitalize active">
                          {dialects[key].name.toLowerCase()}
                      </Nav.Link>
                      </Nav.Item>
                    )
                  })
                }
              </Nav>
          </Col>
          <Col/>
          <Col>
            <Nav className='flex-column'>
                <Nav.Link href="https://github.com/dblintio" className="small">
                  <FontAwesome name='github' size='2x'/>
                  Github Project
                </Nav.Link>
                <label className="small">
                  Mart Version: {this.state.martVersion}
                </label>
                <label className="small">
                  FE Version: {this.state.feVersion}
                </label>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col/>
          <Col>
            <label className="small copyright center">
              Copyright Dblint.io 2018
            </label>
          </Col>
          <Col/>
        </Row>
      </Container>
    );
  }
}

export default Footer;
