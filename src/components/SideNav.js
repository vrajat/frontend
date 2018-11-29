import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { features } from '../constants/features';
import {setFeature} from '../reducers/actions';

import { connect } from 'react-redux';

import './SideNav.css';

class SideNav extends Component {
  
  handleSelect(feature) {
    this.props.onDbClick(features[feature]);
  }
  render() {
    return(
        <Navbar className='flex-column sidenav' variant='dark' bg='dark'>
        <label className='sidenav-header'>{this.props.dialect.name}</label>
            {
              this.props.dialect.features.map((f, index) => {
                return (
                  <Nav.Item key={index}>
                    <Nav.Link
                          key={index} eventkey={f} 
                          onClick={() => this.handleSelect(f)}
			className="small capitalize sidenav-links">
                        {features[f].display}
                      </Nav.Link>
                  </Nav.Item>
                )
              })
            }
        </Navbar>
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
