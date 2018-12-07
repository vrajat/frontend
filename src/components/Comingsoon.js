import React, { Component } from "react";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import FontAwesome from "react-fontawesome";
import { Mixpanel } from "../lib/MixPanel";

class Comingsoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      email: undefined
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ showAlert: true });
    Mixpanel.people.set_once({
      email: this.state.email
    });
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Alert isOpen={this.state.showAlert} color="info"
                     toggle={() => {
                       this.setState({ showAlert: false });
                     }}>
                <h4>Thanks for showing interest!</h4>
                <p>
                  {this.state.email}, we will notify you when the feature is released.
                </p>
              </Alert>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Coming soon</h1>
                    <p className="text-muted">Enter email to be notified</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email"
                             onChange={this.handleChange} autoComplete="email"
                             value={this.state.value}/>
                    </InputGroup>
                    <Button color="success" block onClick={this.handleClick}>
                      Notify Me!
                    </Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Button className="btn-github mb-1" block
                            href="https://github.com/dblintio/frontend/issues/8">
                      <FontAwesome name="github"/>
                      <span>  Watch the Github Issue</span>
                    </Button>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Comingsoon;
