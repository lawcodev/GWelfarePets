import React from 'react'

const Span = props =>(
  <span className={props.className} style={props.style}>
    {props.text}
  </span>
)
export default Span