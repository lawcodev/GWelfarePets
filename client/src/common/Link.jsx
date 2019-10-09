import React from 'react'

const Link = props => (
  <a type={props.type} role={props.role} style={{color: "white"}} className={props.className} onClick={props.onClick} href={props.href}>
    <i className={props.icon}></i> {props.text}
  </a>
)

export default Link