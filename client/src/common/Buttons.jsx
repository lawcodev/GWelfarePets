import React from 'react'
import { Button } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip';

const Buttons = props => {
  
  return(
      props.titleTooltip ?
      <Tooltip title={props.titleTooltip}>
        <span>
          <Button variant={props.variant} disabled={props.disabled} color={props.color} onClick={props.onClick} style={props.style}>
            {props.text}
          </Button>
        </span>
      </Tooltip>
      : 
      <Button variant={props.variant} disabled={props.disabled} color={props.color} onClick={props.onClick} style={props.style}>
        {props.text}
      </Button>
  )
}

export default Buttons