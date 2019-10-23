import React from 'react'

const Small = props =>(
  <small className={props.className} style={props.style}>
    {props.text}
  </small>
)
export default Small