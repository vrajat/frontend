import React, { Component } from 'react';
import { Alert, Nav } from 'react-bootstrap';
import { features } from '../constants/features';

import { connect } from 'react-redux';

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
      dialect: props.dialect
    };
  }

  render() {
    return(
        <Nav className='flex-column'>
          <Alert variant='success'>
            <Alert.Heading>{this.state.dialect.name}</Alert.Heading>
          </Alert>
            {
              this.state.dialect.features.map((f) => {
                return (
                  <Nav.Item>
                    <Nav.Link
                        href={"/" + this.state.dialect.name.toLowerCase()
                            + "-" + features[f]}
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
  return {
    dialect: state.app.dialect
  };
}

export default connect(mapStateToProps)(SideNav)
