import React from 'react'
import { Button } from 'reactstrap';

const Buttons = props =>(
  <Button color={props.color} className={props.className} onClick={props.onClick}>
    {props.text}
  </Button>
)

export default Buttons