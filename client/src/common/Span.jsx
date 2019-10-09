import React from 'react'

const Span = props =>(
  <span className={props.className} style={props.style}>
    <strong>{props.text}</strong>
  </span>
)
export default Span