import React from 'react'
import { Input } from 'reactstrap';

const Inputs = props =>(
  <Input type={props.type} placeholder={props.placeholder} name={props.name} id={props.id} autoFocus className={props.className} 
  onChange={props.onChange} value={props.value} style={props.style}/>
)

export default Inputs