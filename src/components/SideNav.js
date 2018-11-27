import React, { Component } from 'react';
import { Alert, Nav } from 'react-bootstrap';
import { dialects } from '../constants/dialects';
import { features } from '../constants/features';

import { connect } from 'react-redux';

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
      dialect: props.dialect
    };
    console.log(this.state.dialect);
    console.log(dialects[this.state.dialect.toLowerCase()].features);

  }

  render() {
    return(
        <Nav className='flex-column'>
          <Alert variant='success'>
            <Alert.Heading>{this.state.dialect}</Alert.Heading>
          </Alert>
            {
              dialects[this.state.dialect.toLowerCase()].features.map((f) => {
                return (
                  <Nav.Item>
                  <Nav.Link href={"/" + this.state.dialect.toLowerCase() + "/" + features[f]}
                        key={f} eventkey={f} className="small capitalize">
                      {f}
                  </Nav.Link>
                  </Nav.Item>
                )
              })
            }
        </Nav>
    )
  }
}


function mapStateToProps(state) {
  console.log(state);
  return {
    dialect: state.app.dialect
  };
}

export default connect(mapStateToProps)(SideNav)
