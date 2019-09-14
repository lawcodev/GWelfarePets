import React from 'react';
import Dialog from '@material-ui/core/Dialog';

const Dialog = props =>(
  <Dialog open={props.open}  onClose={props.handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"/>
)

export default Dialog