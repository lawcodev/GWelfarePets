import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DefaultFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <span className="ml-auto">&copy; Copyright - 2019 <a href="https://www.lawcodev.com">Lawcodev</a></span>
      </React.Fragment>
    );
  }
}
export default DefaultFooter;
