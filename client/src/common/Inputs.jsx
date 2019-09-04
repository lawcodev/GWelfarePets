import React from 'react'
import { Input } from 'reactstrap';

const Inputs = props =>(
  <Input type={props.type} placeholder={props.placeholder} autoComplete={props.autoComplete}></Input>
)

export default Inputs