import React from 'react'
import { Button } from '@material-ui/core'

const Buttons = props =>(
  <Button variant={props.variant} color={props.color} onClick={props.onClick}>
    {props.text}
  </Button>
)

export default Buttons