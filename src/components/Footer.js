import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from "react-fontawesome";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class Footer extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span> &copy; 2018 <a href="https://dblint.io">Dblint</a></span>
        <span className="ml-auto">
          <FontAwesome name="github" size="2x"/>
          <a href="https://github.com/dblintio"> Github Project</a>
        </span>
      </React.Fragment>
    );
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
