import React from 'react'

const H2 = props =>(
  <h2 className={props.className} style={props.style}>
    {props.text}
  </h2>
)
export default H2