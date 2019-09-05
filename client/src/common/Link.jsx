import React from 'react'

const Link = props =>(
  <a type={props.type} role={props.role} className={props.className} onClick={props.url} href={props.href}>
    <i className={props.icon}></i>
  </a>
)

export default Link