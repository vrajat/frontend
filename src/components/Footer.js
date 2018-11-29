import React, { Component } from 'react';
import { Container, Nav, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { dialects, version } from '../constants/';
import {setDialect} from '../reducers/actions';
import { connect } from 'react-redux';
import axios from 'axios';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      martVersion: 'Not Available',
      feVersion: version
    }
  }

  handleSelect(db) {
    this.props.onDbClick(dialects[db]);
  }
  componentDidMount() {
    var self = this;
    axios({
      method: 'get',
      url: "/api/dblint/version",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then(function (response) {
      console.log(response);
      self.setState({martVersion: response.data.buildVersion});
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
	    <Row>
              <label className="medium bold">Supported Databases:</label>
	    </Row>
	    <Row>
              <Nav defaultActiveKey="mysql">
                {
                  Object.keys(dialects).map((key, index) => {
                    return (
                      <Nav.Item key={index} className=".dialectLinks">
                        <Nav.Link key={index}
                            eventkey={key}
                            onClick={() => this.handleSelect(key)}
                            className="small">
                          {dialects[key].display}
                        </Nav.Link>
                      </Nav.Item>
                    )
                  })
                }
              </Nav>
	    </Row>
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
};

const mapDispatchToProps = dispatch => {
  return {
    onDbClick: db => {
      dispatch(setDialect(db))
    }
  }
}

export default connect(null, mapDispatchToProps)(Footer)
