import React, { Component } from 'react';
import { Alert, Nav } from 'react-bootstrap';
import { features } from '../constants/features';
import {setFeature} from '../reducers/actions';

import { connect } from 'react-redux';

class SideNav extends Component {
  
  handleSelect(feature) {
    this.props.onDbClick(features[feature]);
  }
  render() {
    return(
        <Nav className='flex-column'>
          <Alert variant='success'>
            <Alert.Heading>{this.props.dialect.name}</Alert.Heading>
          </Alert>
            {
              this.props.dialect.features.map((f, index) => {
                return (
                  <Nav.Item key={index}>
                    <Nav.Link
                          key={index} eventkey={f} 
                          onClick={() => this.handleSelect(f)}
			className="small capitalize">
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
    dialect: state.dialect
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onDbClick: feature => {
      dispatch(setFeature(feature))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SideNav)
