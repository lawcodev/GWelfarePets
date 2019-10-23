import React, { Component } from 'react'
import {connect} from 'react-redux';
import { AccidentAdd } from '../Accidents/action/accidentAction';

class AddNewAccidentsPost extends Component {
  render() {
    return(
      <h1>Registro de un nuevo accidente</h1>
    )
  }
}
export default connect(null, {AccidentAdd})(AddNewAccidentsPost);
