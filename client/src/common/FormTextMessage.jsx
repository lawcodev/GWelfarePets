import React, { Component } from 'react'
import { FormText } from 'reactstrap';

class FormTextMessage extends Component {
  render () {
    const styles = {
      color: this.props.color
    }
    return (
      <FormText style={styles} className={this.props.className}>
        {this.props.text}
      </FormText> 
    )
  }
}

export default FormTextMessage