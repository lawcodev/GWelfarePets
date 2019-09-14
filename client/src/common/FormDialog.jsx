import React from 'react';
import Button from '@material-ui/core/Button';

const FormDialog = props =>(
  <Button variant="outlined" color={props.color} onClick={props.onClick}>
    {props.text}
  </Button>
)

export default FormDialog