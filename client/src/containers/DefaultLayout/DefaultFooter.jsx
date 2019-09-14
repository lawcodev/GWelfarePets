import React, { Component } from 'react';
import Span from '../../common/Span'

class DefaultFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <Span className='ml-auto' text='&copy; Copyright - 2019 '/> 
      </React.Fragment>
    );
  }
}
export default DefaultFooter;
