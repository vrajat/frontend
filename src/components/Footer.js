import React, { Component } from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";
import { Button, Col, Container, Row } from "reactstrap";
import { version } from "../constants";
import axios from 'axios';

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      martVersion: "Unknown",
      feVersion: version
    }
  }

  componentDidMount() {
    let self = this;
    axios({
      method: 'get',
      url: "/api/dblint/version",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then(function (response) {
      self.setState({martVersion: response.data.buildVersion});
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={4}> &copy; 2018 <a href="https://dblint.io">Dblint</a></Col>
          <Col className="ml-auto" sm={4}>
            <Button color="danger" size="sm"
                    href="https://github.com/dblintio/frontend/issues">
              <FontAwesome name="bug"/>
              Report Issues
            </Button>
          </Col>
          <Col xs={2}>
            <Button color="info" size="sm"
                    href="https://github.com/dblintio/frontend/releases">
              <FontAwesome name="github"/>
              Frontend Version: {this.state.feVersion}
            </Button>
          </Col>
          <Col xs={2}>
            <Button color="info" size="sm"
                    href="https://github.com/dblintio/mart/releases">
              <FontAwesome name="github"/>
              Mart Version: {this.state.martVersion}
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
