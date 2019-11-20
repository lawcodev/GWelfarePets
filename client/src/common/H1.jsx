import React, { Component } from 'react'

class H1 extends Component {
  render () {
    return (
      <h1 className={this.props.className} style={this.props.style}>
        {this.props.text}
      </h1>
    )
  }
}
export default H1